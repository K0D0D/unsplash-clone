import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectSearchUsersCurrentPage,
	selectSearchUsersData,
	selectSearchUsersHasMore,
	selectSearchUsersIsLoading,
	selectSearchUsersPageSize
} from "../../store/search/searchUsers/searchUsersSelectors";
import {
	clearSearchUsersData,
	setSearchUsersPage
} from "../../store/search/searchUsers/searchUsersSlice";
import { fetchSearchUsers } from "../../store/search/searchUsers/searchUsersThunks";
import Users from "../Users/Users";

const SearchUsers = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q") || "";
	const dispatch = useAppDispatch();
	const users = useAppSelector(selectSearchUsersData);
	const isLoading = useAppSelector(selectSearchUsersIsLoading);
	const page = useAppSelector(selectSearchUsersCurrentPage);
	const perPage = useAppSelector(selectSearchUsersPageSize);
	const hasMore = useAppSelector(selectSearchUsersHasMore);

	useEffect(() => {
		return () => {
			dispatch(clearSearchUsersData());
		};
	}, [dispatch, query]);

	useEffect(() => {
		const promise = dispatch(
			fetchSearchUsers({
				query,
				page,
				perPage
			})
		);

		return () => promise.abort();
	}, [dispatch, query, page, perPage]);

	const fetchNext = () => {
		dispatch(setSearchUsersPage(page + 1));
	};

	return (
		<Users
			users={users}
			isLoading={isLoading}
			pageSize={perPage}
			hasMore={hasMore}
			fetchNext={fetchNext}
		/>
	);
};

export default SearchUsers;
