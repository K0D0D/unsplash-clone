import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectSearchCollectionsCurrentPage,
	selectSearchCollectionsData,
	selectSearchCollectionsHasMore,
	selectSearchCollectionsIsLoading,
	selectSearchCollectionsPageSize
} from "../../store/search/searchCollections/searchCollectionsSelectors";
import {
	clearSearchCollectionsData,
	setSearchCollectionsPage
} from "../../store/search/searchCollections/searchCollectionsSlice";
import { fetchSearchCollections } from "../../store/search/searchCollections/searchCollectionsThunks";
import Collections from "../Collections/Collections";

const SearchCollections = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q") || "";
	const dispatch = useAppDispatch();
	const collections = useAppSelector(selectSearchCollectionsData);
	const isLoading = useAppSelector(selectSearchCollectionsIsLoading);
	const page = useAppSelector(selectSearchCollectionsCurrentPage);
	const perPage = useAppSelector(selectSearchCollectionsPageSize);
	const hasMore = useAppSelector(selectSearchCollectionsHasMore);

	useEffect(() => {
		return () => {
			dispatch(clearSearchCollectionsData());
		};
	}, [dispatch, query]);

	useEffect(() => {
		const promise = dispatch(
			fetchSearchCollections({
				query,
				page,
				perPage
			})
		);

		return () => promise.abort();
	}, [dispatch, query, page, perPage]);

	const fetchNext = () => {
		dispatch(setSearchCollectionsPage(page + 1));
	};

	return (
		<Collections
			collections={collections}
			isLoading={isLoading}
			pageSize={perPage}
			hasMore={hasMore}
			fetchNext={fetchNext}
		/>
	);
};

export default SearchCollections;
