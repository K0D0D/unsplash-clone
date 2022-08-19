import { Navigate, useParams } from "react-router-dom";
import UserCollections from "../../components/UserCollections/UserCollections";
import UserLikes from "../../components/UserLikes/UserLikes";
import UserNav from "../../components/UserNav/UserNav";
import UserPhotos from "../../components/UserPhotos/UserPhotos";
import UserProfile from "../../components/UserProfile/UserProfile";
import Wrapper from "../../components/Wrapper/Wrapper";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectUserDetailsData,
	selectUserDetailsIsLoading
} from "../../store/user/userDetails/userDetailsSelectors";

type RouteParams = {
	type: "photos" | "likes" | "collections";
};

const UserPage = () => {
	const { type } = useParams() as RouteParams;
	const details = useAppSelector(selectUserDetailsData);
	const isLoadingDetails = useAppSelector(selectUserDetailsIsLoading);

	return (
		<>
			<Wrapper>
				<UserProfile />
			</Wrapper>
			{details && !isLoadingDetails && (
				<>
					<UserNav />
					<Wrapper>
						{(() => {
							switch (type) {
								case "photos":
									return <UserPhotos />;
								case "likes":
									return <UserLikes />;
								case "collections":
									return <UserCollections />;
								default:
									return <Navigate to="/404" />;
							}
						})()}
					</Wrapper>
				</>
			)}
		</>
	);
};

export default UserPage;
