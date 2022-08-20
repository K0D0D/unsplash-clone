import { useEffect } from "react";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectEditorialPhotosCurrentPage,
	selectEditorialPhotosData,
	selectEditorialPhotosHasMore,
	selectEditorialPhotosIsLoading,
	selectEditorialPhotosPageSize
} from "../../store/editorialPhotos/editorialPhotosSelectors";
import {
	clearEditorialPhotosData,
	setEditorialPhotosPage
} from "../../store/editorialPhotos/editorialPhotosSlice";
import { fetchEditorialPhotos } from "../../store/editorialPhotos/editorialPhotosThunks";
import Photos from "../Photos/Photos";

const EditorialPhotos = () => {
	const dispatch = useAppDispatch();
	const photos = useAppSelector(selectEditorialPhotosData);
	const isLoading = useAppSelector(selectEditorialPhotosIsLoading);
	const page = useAppSelector(selectEditorialPhotosCurrentPage);
	const perPage = useAppSelector(selectEditorialPhotosPageSize);
	const hasMore = useAppSelector(selectEditorialPhotosHasMore);

	useEffect(() => {
		return () => {
			dispatch(clearEditorialPhotosData());
		};
	}, [dispatch]);

	useEffect(() => {
		const promise = dispatch(fetchEditorialPhotos({ page, perPage }));

		return () => promise.abort();
	}, [dispatch, page, perPage]);

	const fetchNext = () => {
		dispatch(setEditorialPhotosPage(page + 1));
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

export default EditorialPhotos;
