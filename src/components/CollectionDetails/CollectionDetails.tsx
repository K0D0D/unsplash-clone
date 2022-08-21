import useAppSelector from "../../hooks/useAppSelector";
import {
	selectCollectionDetailsData,
	selectCollectionDetailsIsLoading
} from "../../store/collection/collectionDetails/collectionDetailsSelectors";
import CollectionDetailsSkeleton from "./CollectionDetailsSkeleton";
import styles from "./CollectionDetails.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import { NavLink, useParams } from "react-router-dom";
import Button from "../Button/Button";
import { IoMdShareAlt } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { useEffect } from "react";
import { fetchCollectionDetails } from "../../store/collection/collectionDetails/collectionDetailsThunks";
import useAppDispatch from "../../hooks/useAppDispatch";

type RouteParams = {
	id: string;
};

const CollectionInfo = () => {
	const { id } = useParams() as RouteParams;
	const dispatch = useAppDispatch();
	const data = useAppSelector(selectCollectionDetailsData);
	const isLoading = useAppSelector(selectCollectionDetailsIsLoading);

	useEffect(() => {
		const promise = dispatch(fetchCollectionDetails(id));

		return () => promise.abort();
	}, [dispatch, id]);

	return (
		<>
			{data && !isLoading ? (
				<div className={styles.inner}>
					<div className={styles.cover}>
						<img
							className={styles.coverImage}
							src={data.cover_photo.urls.regular}
							alt=""
						/>
					</div>
					<Wrapper>
						<div className={styles.top}>
							<div className={styles.left}>
								<h1 className={styles.title}>{data.title}</h1>
								{data.description && (
									<p className={styles.description}>
										{data.description}
									</p>
								)}
								<div className={styles.user}>
									<NavLink to="/">
										<img
											className={styles.avatar}
											src={data.user.profile_image.small}
											alt=""
										/>
									</NavLink>
									<NavLink className={styles.name} to="/">
										{data.user.name}
									</NavLink>
								</div>
							</div>
							<div className={styles.right}>
								<Button className={styles.button} variant="outlined">
									<IoMdShareAlt />
									<span className={styles.buttonText}>Share</span>
								</Button>
								<Button className={styles.button} variant="outlined">
									<BsThreeDots />
								</Button>
							</div>
						</div>
						<div className={styles.bottom}>
							<p className={styles.number}>{data.total_photos} photos</p>
						</div>
					</Wrapper>
				</div>
			) : (
				<CollectionDetailsSkeleton />
			)}
		</>
	);
};

export default CollectionInfo;
