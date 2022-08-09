import styles from "./Photo.module.scss";
import Skeleton from "../Skeleton/Skeleton";

const PhotoSkeleton = () => (
	<div className={styles.container} style={{ paddingBottom: "70%" }}>
		<Skeleton style={{ position: "absolute", height: "100%" }} variant="rect" />
	</div>
);

export default PhotoSkeleton;
