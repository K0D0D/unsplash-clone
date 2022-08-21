import { useEffect, useState } from "react";
import { BsFillHeartFill, BsPlusLg, BsThreeDots } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdCameraAlt, MdOutlineCalendarToday } from "react-icons/md";
import { IoMdShareAlt, IoMdInformationCircle } from "react-icons/io";
import { AiOutlineSafety } from "react-icons/ai";
import dayjs from "dayjs";
import { NavLink, useSearchParams } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import {
	selectPhotoDetailsData,
	selectPhotoDetailsIsLoading
} from "../../store/photoDetails/photoDetailsSelectors";
import Button from "../Button/Button";
import RelatedCollections from "../RelatedCollections/RelatedCollections";
import styles from "./PhotoDetails.module.scss";
import { BlurhashCanvas } from "react-blurhash";
import { saveAs } from "file-saver";
import PhotoDetailsSkeleton from "./PhotoDetailsSkeleton";
import useAppDispatch from "../../hooks/useAppDispatch";
import { fetchPhotoDetails } from "../../store/photoDetails/photoDetailsThunks";

const PhotoDetails = () => {
	const [searchParams] = useSearchParams();
	const id = searchParams.get("photo_id") || "";
	const dispatch = useAppDispatch();
	const data = useAppSelector(selectPhotoDetailsData);
	const isLoading = useAppSelector(selectPhotoDetailsIsLoading);
	const [isImageFullWidth, setIsImageFullWidth] = useState<boolean>(false);

	useEffect(() => {
		if (!id) return;

		const promise = dispatch(fetchPhotoDetails(id));

		return () => promise.abort();
	}, [dispatch, id]);

	const changeImageSize = () => setIsImageFullWidth(!isImageFullWidth);

	const downloadPhoto = () => {
		if (!data) return;

		saveAs(data.urls.full, `${data.user.username}-${data.id}-unflash.jpg`);
	};

	if (!data || isLoading) return <PhotoDetailsSkeleton />;

	return (
		<>
			<header className={styles.header}>
				<div className={styles.left}>
					<NavLink to={`/users/${data.user.username}/photos`}>
						<img
							className={styles.avatar}
							src={data.user.profile_image.small}
							alt=""
						/>
					</NavLink>
					<div className={styles.userInfo}>
						<NavLink
							className={styles.name}
							to={`/users/${data.user.username}/photos`}
						>
							{data.user.name}
						</NavLink>
						<NavLink
							className={styles.username}
							to={`/users/${data.user.username}/photos`}
						>
							@{data.user.username}
						</NavLink>
					</div>
				</div>
				<div className={styles.right}>
					<Button className={styles.button} variant="outlined" title="Like">
						<BsFillHeartFill />
					</Button>
					<Button
						className={styles.button}
						variant="outlined"
						title="Add to collection"
					>
						<BsPlusLg />
					</Button>
					<Button
						className={`${styles.button} ${styles.downloadBtn}`}
						title="Download photo"
						onClick={downloadPhoto}
					>
						Download free
					</Button>
				</div>
			</header>
			<div
				className={`${styles.imageWrapper} ${
					isImageFullWidth ? styles.fullWidth : ""
				}`}
			>
				<div
					className={styles.imageContainer}
					style={{
						maxWidth: isImageFullWidth
							? "100%"
							: "calc((100vh - 10.9em) * " + data.width / data.height + ")",
						minWidth: `min(100%, ${(data.width / data.height) * 36.25}em)`
					}}
				>
					<button
						className={styles.imageInner}
						style={{
							paddingTop: isImageFullWidth
								? ""
								: (data.height / data.width) * 100 + "%"
						}}
						onClick={changeImageSize}
					>
						{data.blur_hash && (
							<BlurhashCanvas
								className={styles.blur}
								hash={data.blur_hash}
							/>
						)}
						<img
							className={styles.image}
							src={data.urls.regular}
							alt={data.alt_description || ""}
						/>
					</button>
				</div>
			</div>
			<div className={styles.photoInfo}>
				<div className={styles.stats}>
					<div className={styles.stat}>
						<p className={styles.statTitle}>Views</p>
						<p className={styles.statValue}>{data.views}</p>
					</div>
					<div className={styles.stat}>
						<p className={styles.statTitle}>Downloads</p>
						<p className={styles.statValue}>{data.downloads}</p>
					</div>
				</div>
				<div className={styles.actions}>
					<Button
						className={`${styles.button} ${styles.actionBtn}`}
						variant="outlined"
					>
						<IoMdShareAlt />
						<span className={styles.actionBtnText}>Share</span>
					</Button>
					<Button
						className={`${styles.button} ${styles.actionBtn}`}
						variant="outlined"
					>
						<IoMdInformationCircle />
						<span className={styles.actionBtnText}>Info</span>
					</Button>
					<Button
						className={`${styles.button} ${styles.actionBtn}`}
						variant="outlined"
					>
						<BsThreeDots />
					</Button>
				</div>
				<div className={styles.details}>
					{data.location.name && (
						<NavLink
							className={`${styles.detail} ${styles.link}`}
							to={`/s/photos/?q=${encodeURIComponent(data.location.name)}`}
						>
							<ImLocation />
							{data.location.name}
						</NavLink>
					)}
					<p className={styles.detail}>
						<MdOutlineCalendarToday />
						Published on {dayjs(data.created_at).format("MMMM D, YYYY")}
					</p>
					{data.exif.name && (
						<p className={styles.detail}>
							<MdCameraAlt />
							{data.exif.name}
						</p>
					)}
					<p className={styles.detail}>
						<AiOutlineSafety />
						Free to use under the{" "}
						<a
							className={styles.link}
							href="https://unsplash.com/license"
							target="_blank"
							rel="noreferrer"
						>
							Unsplash License
						</a>
					</p>
				</div>
				<div className={styles.description}>{data.description || ""}</div>
			</div>
			<div className={styles.wrapper}>
				{!!data.tags.length && (
					<>
						<h3 className={styles.subtitle}>Related tags</h3>
						<div className={styles.tags}>
							{data.tags.map((tag, index) => (
								<NavLink
									className={styles.tag}
									to={`/s/photos/?q=${encodeURIComponent(tag.title)}`}
									key={index}
								>
									{tag.title}
								</NavLink>
							))}
						</div>
					</>
				)}
				{!!data.related_collections.total && (
					<>
						<h3 className={styles.subtitle}>Related collections</h3>
						<RelatedCollections
							collections={data.related_collections.results}
						/>
					</>
				)}
			</div>
		</>
	);
};

export default PhotoDetails;
