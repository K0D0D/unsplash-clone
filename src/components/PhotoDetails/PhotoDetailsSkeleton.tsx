import { BsFillHeartFill, BsPlusLg, BsThreeDots } from "react-icons/bs";
import { IoMdInformationCircle, IoMdShareAlt } from "react-icons/io";
import Button from "../Button/Button";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./PhotoDetails.module.scss";

const PhotoDetailsSkeleton = () => (
	<>
		<header className={styles.header}>
			<div className={styles.left}>
				<div className={styles.avatar}>
					<Skeleton
						style={{ height: "100%", width: "100%" }}
						variant="circle"
					/>
				</div>
				<div className={styles.userInfo}>
					<Skeleton
						style={{ maxWidth: "9em", height: "0.95em" }}
						variant="text"
					/>
					<Skeleton
						style={{
							maxWidth: "7em",
							height: "0.9em",
							marginTop: "0.2em"
						}}
						variant="text"
					/>
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
				>
					Download free
				</Button>
			</div>
		</header>
		<div className={styles.imageContainer} style={{ paddingBottom: "55%" }}>
			<Skeleton style={{ position: "absolute", height: "100%" }} variant="rect" />
		</div>
		<div className={styles.photoInfo}>
			<div className={styles.stats}>
				<div className={styles.stat}>
					<Skeleton
						style={{ maxWidth: "6.5em", height: "1em" }}
						variant="text"
					/>
					<Skeleton
						style={{
							maxWidth: "5em",
							height: "1.07em",
							marginTop: "0.65em"
						}}
						variant="text"
					/>
				</div>
				<div className={styles.stat}>
					<Skeleton style={{ maxWidth: "8em", height: "1em" }} variant="text" />
					<Skeleton
						style={{
							maxWidth: "4.5em",
							height: "1.07em",
							marginTop: "0.65em"
						}}
						variant="text"
					/>
				</div>
			</div>
			<div className={styles.actions}>
				<Button
					className={`${styles.button} ${styles.actionBtn}`}
					variant="outlined"
				>
					<IoMdShareAlt />
					Share
				</Button>
				<Button
					className={`${styles.button} ${styles.actionBtn}`}
					variant="outlined"
				>
					<IoMdInformationCircle />
					Info
				</Button>
				<Button
					className={`${styles.button} ${styles.actionBtn}`}
					variant="outlined"
				>
					<BsThreeDots />
				</Button>
			</div>
			<div className={styles.details}>
				<Skeleton style={{ maxWidth: "12em", height: "1.15em" }} variant="text" />
				<Skeleton
					style={{ maxWidth: "14em", height: "1.15em", marginTop: "1em" }}
					variant="text"
				/>
				<Skeleton
					style={{ maxWidth: "11em", height: "1.15em", marginTop: "1em" }}
					variant="text"
				/>
				<Skeleton
					style={{ maxWidth: "16em", height: "1.15em", marginTop: "1em" }}
					variant="text"
				/>
			</div>
			<div className={styles.description}>
				<Skeleton style={{ height: "1.6em" }} variant="text" />
				<Skeleton
					style={{ maxWidth: "35em", height: "1.6em", marginTop: "0.2em" }}
					variant="text"
				/>
			</div>
		</div>
	</>
);

export default PhotoDetailsSkeleton;
