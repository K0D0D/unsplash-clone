import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectUserPhotosCurrentPage,
	selectUserPhotosData,
	selectUserPhotosHasMore,
	selectUserPhotosIsLoading,
	selectUserPhotosPageSize
} from "../../store/user/userPhotos/userPhotosSelectors";
import {
	clearUserPhotosData,
	setUserPhotosPage
} from "../../store/user/userPhotos/userPhotosSlice";
import { fetchUserPhotos } from "../../store/user/userPhotos/userPhotosThunks";
import Photos from "../Photos/Photos";

type RouteParams = {
	username: string;
};

const UserPhotos = () => {
	const { username } = useParams() as RouteParams;
	const dispatch = useAppDispatch();
	const photos = useAppSelector(selectUserPhotosData);
	const isLoading = useAppSelector(selectUserPhotosIsLoading);
	const page = useAppSelector(selectUserPhotosCurrentPage);
	const perPage = useAppSelector(selectUserPhotosPageSize);
	const hasMore = useAppSelector(selectUserPhotosHasMore);

	useEffect(() => {
		return () => {
			dispatch(clearUserPhotosData());
		};
	}, [dispatch, username]);

	useEffect(() => {
		const promise = dispatch(
			fetchUserPhotos({
				username,
				page,
				perPage
			})
		);

		return () => promise.abort();
	}, [dispatch, username, page, perPage]);

	const fetchNext = () => {
		dispatch(setUserPhotosPage(page + 1));
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

export default UserPhotos;
