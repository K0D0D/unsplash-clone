import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectTopicPhotosCurrentPage,
	selectTopicPhotosData,
	selectTopicPhotosHasMore,
	selectTopicPhotosIsLoading,
	selectTopicPhotosPageSize
} from "../../store/topic/topicPhotos/topicPhotosSelectors";
import {
	clearTopicPhotosData,
	setTopicPhotosPage
} from "../../store/topic/topicPhotos/topicPhotosSlice";
import { fetchTopicPhotos } from "../../store/topic/topicPhotos/topicPhotosThunks";
import Photos from "../Photos/Photos";

type RouteParams = {
	slug: string;
};

const TopicPhotos = () => {
	const { slug } = useParams() as RouteParams;
	const dispatch = useAppDispatch();
	const photos = useAppSelector(selectTopicPhotosData);
	const isLoading = useAppSelector(selectTopicPhotosIsLoading);
	const page = useAppSelector(selectTopicPhotosCurrentPage);
	const perPage = useAppSelector(selectTopicPhotosPageSize);
	const hasMore = useAppSelector(selectTopicPhotosHasMore);

	useEffect(() => {
		return () => {
			dispatch(clearTopicPhotosData());
		};
	}, [dispatch, slug]);

	useEffect(() => {
		const promise = dispatch(
			fetchTopicPhotos({
				slug,
				page,
				perPage
			})
		);

		return () => promise.abort();
	}, [dispatch, slug, page, perPage]);

	const fetchNext = () => {
		dispatch(setTopicPhotosPage(page + 1));
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

export default TopicPhotos;
