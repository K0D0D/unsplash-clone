import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectSearchPhotosCurrentPage,
	selectSearchPhotosData,
	selectSearchPhotosHasMore,
	selectSearchPhotosIsLoading,
	selectSearchPhotosPageSize
} from "../../store/search/searchPhotos/searchPhotosSelectors";
import {
	clearSearchPhotosData,
	setSearchPhotosPage
} from "../../store/search/searchPhotos/searchPhotosSlice";
import { fetchSearchPhotos } from "../../store/search/searchPhotos/searchPhotosThunks";
import Photos from "../Photos/Photos";

const SearchPhotos = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q") || "";
	const dispatch = useAppDispatch();
	const photos = useAppSelector(selectSearchPhotosData);
	const isLoading = useAppSelector(selectSearchPhotosIsLoading);
	const page = useAppSelector(selectSearchPhotosCurrentPage);
	const perPage = useAppSelector(selectSearchPhotosPageSize);
	const hasMore = useAppSelector(selectSearchPhotosHasMore);

	useEffect(() => {
		return () => {
			dispatch(clearSearchPhotosData());
		};
	}, [dispatch, query]);

	useEffect(() => {
		const promise = dispatch(
			fetchSearchPhotos({
				query,
				page,
				perPage
			})
		);

		return () => promise.abort();
	}, [dispatch, query, page, perPage]);

	const fetchNext = () => {
		dispatch(setSearchPhotosPage(page + 1));
	};

	return (
		<Photos
			photos={photos}
			isLoading={isLoading}
			pageSize={perPage}
			hasMore={hasMore}
			fetchNext={fetchNext}
		/>
	);
};

export default SearchPhotos;
