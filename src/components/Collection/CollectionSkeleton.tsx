import Skeleton from "../Skeleton/Skeleton";
import styles from "./Collection.module.scss";

const CollectionSkeleton = () => (
	<div>
		<div className={styles.images}>
			<Skeleton style={{ position: "absolute", height: "100%" }} variant="rect" />
		</div>
		<div>
			<Skeleton style={{ width: "70%", height: "1.25em" }} variant="text" />
			<Skeleton
				style={{ width: "50%", height: "0.785em", marginTop: "0.7em" }}
				variant="text"
			/>
		</div>
	</div>
);

export default CollectionSkeleton;
