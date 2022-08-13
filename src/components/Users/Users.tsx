import InfiniteScroll from "react-infinite-scroll-component";
import { IUserPreview } from "../../api/types";
import NoResults from "../NoResults/NoResults";
import Spinner from "../Spinner/Spinner";
import UserCard from "../UserCard/UserCard";
import UserCardSkeleton from "../UserCard/UserCardSkeleton";
import styles from "./Users.module.scss";

interface IProps {
	users: IUserPreview[];
	isLoading: boolean;
	pageSize: number;
	hasMore: boolean;
	fetchNext: () => any;
}

const Users = ({ users, isLoading, pageSize, hasMore, fetchNext }: IProps) => (
	<InfiniteScroll
		dataLength={users?.length}
		next={fetchNext}
		hasMore={hasMore}
		loader={<Spinner />}
		scrollThreshold={0.7}
		style={{ overflow: "visible" }}
	>
		<div className={styles.inner}>
			{users?.length
				? users.map((user, index) => (
						<UserCard
							name={user.name}
							username={user.username}
							photos={user.photos}
							profilePic={user.profile_image.medium}
							key={`${user.id}_${index}`}
						/>
				  ))
				: isLoading &&
				  Array.from(Array(pageSize), (_, i) => <UserCardSkeleton key={i} />)}
		</div>
		{!users?.length && !isLoading && <NoResults />}
	</InfiniteScroll>
);

export default Users;
