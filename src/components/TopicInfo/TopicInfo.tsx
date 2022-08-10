import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectTopicInfoData,
	selectTopicInfoIsLoading
} from "../../store/topic/topicInfo/topicInfoSelectors";
import { fetchTopicInfo } from "../../store/topic/topicInfo/topicInfoThunks";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./TopicInfo.module.scss";

type RouteParams = {
	slug: string;
};

const TopicInfo = () => {
	const { slug } = useParams() as RouteParams;
	const dispatch = useAppDispatch();
	const info = useAppSelector(selectTopicInfoData);
	const isLoading = useAppSelector(selectTopicInfoIsLoading);

	useEffect(() => {
		const promise = dispatch(fetchTopicInfo(slug));

		return () => promise.abort();
	}, [dispatch, slug]);

	return (
		<div className={styles.inner}>
			{info && !isLoading ? (
				<h1 className={styles.title}>{info.title}</h1>
			) : (
				<Skeleton style={{ maxWidth: "15em", height: "1.75em" }} variant="text" />
			)}
		</div>
	);
};

export default TopicInfo;
