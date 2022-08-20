import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectUserCollectionsCurrentPage,
	selectUserCollectionsData,
	selectUserCollectionsHasMore,
	selectUserCollectionsIsLoading,
	selectUserCollectionsPageSize
} from "../../store/user/userCollections/userCollectionsSelectors";
import {
	clearUserCollectionsData,
	setUserCollectionsPage
} from "../../store/user/userCollections/userCollectionsSlice";
import { fetchUserCollections } from "../../store/user/userCollections/userCollectionsThunks";
import Collections from "../Collections/Collections";

type RouteParams = {
	username: string;
};

const UserCollections = () => {
	const { username } = useParams() as RouteParams;
	const dispatch = useAppDispatch();
	const collections = useAppSelector(selectUserCollectionsData);
	const isLoading = useAppSelector(selectUserCollectionsIsLoading);
	const page = useAppSelector(selectUserCollectionsCurrentPage);
	const perPage = useAppSelector(selectUserCollectionsPageSize);
	const hasMore = useAppSelector(selectUserCollectionsHasMore);

	useEffect(() => {
		return () => {
			dispatch(clearUserCollectionsData());
		};
	}, [dispatch, username]);

	useEffect(() => {
		const promise = dispatch(
			fetchUserCollections({
				username,
				page,
				perPage
			})
		);

		return () => promise.abort();
	}, [dispatch, username, page, perPage]);

	const fetchNext = () => {
		dispatch(setUserCollectionsPage(page + 1));
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

export default UserCollections;
