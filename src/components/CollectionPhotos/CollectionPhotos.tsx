import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectCollectionPhotosCurrentPage,
	selectCollectionPhotosData,
	selectCollectionPhotosHasMore,
	selectCollectionPhotosIsLoading,
	selectCollectionPhotosPageSize
} from "../../store/collection/collectionPhotos/collectionPhotosSelectors";
import {
	clearCollectionPhotosData,
	setCollectionPhotosPage
} from "../../store/collection/collectionPhotos/collectionPhotosSlice";
import { fetchCollectionPhotos } from "../../store/collection/collectionPhotos/collectionPhotosThunks";
import Photos from "../Photos/Photos";

type RouteParams = {
	id: string;
};

const CollectionPhotos = () => {
	const { id } = useParams() as RouteParams;
	const dispatch = useAppDispatch();
	const photos = useAppSelector(selectCollectionPhotosData);
	const isLoading = useAppSelector(selectCollectionPhotosIsLoading);
	const page = useAppSelector(selectCollectionPhotosCurrentPage);
	const perPage = useAppSelector(selectCollectionPhotosPageSize);
	const hasMore = useAppSelector(selectCollectionPhotosHasMore);

	useEffect(() => {
		return () => {
			dispatch(clearCollectionPhotosData());
		};
	}, [dispatch, id]);

	useEffect(() => {
		const promise = dispatch(
			fetchCollectionPhotos({
				id,
				page,
				perPage
			})
		);

		return () => promise.abort();
	}, [dispatch, id, page, perPage]);

	const fetchNext = () => {
		dispatch(setCollectionPhotosPage(page + 1));
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

export default CollectionPhotos;
