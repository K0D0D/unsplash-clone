import Skeleton from "../Skeleton/Skeleton";
import styles from "./UserProfile.module.scss";

const UserProfileSkeleton = () => (
	<div className={styles.inner}>
		<div className={styles.left}>
			<div className={styles.avatar}>
				<Skeleton style={{ width: "100%", height: "100%" }} variant="circle" />
			</div>
		</div>
		<div className={styles.right}>
			<Skeleton
				className={styles.nameSkeleton}
				style={{ display: "block" }}
				variant="text"
			/>
			<Skeleton
				style={{
					display: "block",
					width: "30em",
					height: "1.65em",
					marginTop: "1.5em"
				}}
				variant="text"
			/>
			<Skeleton
				style={{
					display: "block",
					maxWidth: "10em",
					height: "1.15em",
					margin: "1.12em 0"
				}}
				variant="text"
			/>
			<Skeleton
				style={{
					display: "block",
					maxWidth: "12em",
					height: "1.15em"
				}}
				variant="text"
			/>
		</div>
	</div>
);

export default UserProfileSkeleton;
