import { useEffect } from "react";
import { ImLocation } from "react-icons/im";
import { NavLink, useParams } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectUserDetailsData,
	selectUserDetailsIsLoading
} from "../../store/user/userDetails/userDetailsSelectors";
import { fetchUserDetails } from "../../store/user/userDetails/userDetailsThunks";
import styles from "./UserProfile.module.scss";
import UserProfileSkeleton from "./UserProfileSkeleton";

type RouteParams = {
	username: string;
};

const UserProfile = () => {
	const { username } = useParams() as RouteParams;
	const dispatch = useAppDispatch();
	const details = useAppSelector(selectUserDetailsData);
	const isLoading = useAppSelector(selectUserDetailsIsLoading);

	useEffect(() => {
		const promise = dispatch(fetchUserDetails(username));

		return () => promise.abort();
	}, [dispatch, username]);

	return (
		<>
			{details && !isLoading ? (
				<div className={styles.inner}>
					<div className={styles.left}>
						<img
							className={styles.avatar}
							src={details.profile_image.large}
							alt="user"
						/>
					</div>
					<div className={styles.right}>
						<h1 className={styles.name}>{details.name}</h1>
						{
							<p className={styles.bio}>
								{details.bio ||
									`Download free, beautiful high-quality photos curated by ${details.first_name}.`}
							</p>
						}
						{details.location && (
							<NavLink
								className={styles.location}
								to={`/s/photos/?q=${details.location}`}
							>
								<ImLocation />
								{details.location}
							</NavLink>
						)}
						{!!details.tags.custom.length && (
							<>
								<h3 className={styles.subtitle}>Interests</h3>
								<div className={styles.tags}>
									{details.tags.custom.map((tag, index) => (
										<NavLink
											className={styles.tag}
											to={`/s/photos/?q=${tag.title}`}
											key={index}
										>
											{tag.title}
										</NavLink>
									))}
								</div>
							</>
						)}
					</div>
				</div>
			) : (
				<UserProfileSkeleton />
			)}
		</>
	);
};

export default UserProfile;
