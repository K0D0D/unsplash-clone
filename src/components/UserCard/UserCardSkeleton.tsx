import Skeleton from "../Skeleton/Skeleton";
import styles from "./UserCard.module.scss";

const UserCardSkeleton = () => (
	<div className={styles.containerSkeleton}>
		<Skeleton style={{ position: "absolute", height: "100%" }} variant="rect" />
	</div>
);

export default UserCardSkeleton;
