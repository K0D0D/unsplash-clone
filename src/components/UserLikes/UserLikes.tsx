import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectUserLikesCurrentPage,
	selectUserLikesData,
	selectUserLikesHasMore,
	selectUserLikesIsLoading,
	selectUserLikesPageSize
} from "../../store/user/userLikes/userLikesSelectors";
import {
	clearUserLikesData,
	setUserLikesPage
} from "../../store/user/userLikes/userLikesSlice";
import { fetchUserLikes } from "../../store/user/userLikes/userLikesThunks";
import Photos from "../Photos/Photos";

type RouteParams = {
	username: string;
};

const UserLikes = () => {
	const { username } = useParams() as RouteParams;
	const dispatch = useAppDispatch();
	const likes = useAppSelector(selectUserLikesData);
	const isLoading = useAppSelector(selectUserLikesIsLoading);
	const page = useAppSelector(selectUserLikesCurrentPage);
	const perPage = useAppSelector(selectUserLikesPageSize);
	const hasMore = useAppSelector(selectUserLikesHasMore);

	useEffect(() => {
		return () => {
			dispatch(clearUserLikesData());
		};
	}, [dispatch, username]);

	useEffect(() => {
		const promise = dispatch(
			fetchUserLikes({
				username,
				page,
				perPage
			})
		);

		return () => promise.abort();
	}, [dispatch, username, page, perPage]);

	const fetchNext = () => {
		dispatch(setUserLikesPage(page + 1));
	};

	return (
		<Photos
			photos={likes}
			isLoading={isLoading}
			pageSize={perPage}
			hasMore={hasMore}
			fetchNext={fetchNext}
		/>
	);
};

export default UserLikes;
