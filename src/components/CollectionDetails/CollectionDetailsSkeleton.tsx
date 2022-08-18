import { BsThreeDots } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";
import Button from "../Button/Button";
import Skeleton from "../Skeleton/Skeleton";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./CollectionDetails.module.scss";

const CollectionDetailsSkeleton = () => (
	<div className={styles.inner}>
		<Wrapper>
			<div className={styles.top}>
				<div className={styles.left}>
					<Skeleton
						style={{ maxWidth: "16em", height: "3.2em" }}
						variant="text"
					/>
					<Skeleton
						style={{
							maxWidth: "22em",
							height: "1.8em",
							marginTop: "1em"
						}}
						variant="text"
					/>
					<div className={styles.user}>
						<Skeleton
							style={{
								width: "2em",
								height: "2em",
								marginRight: "0.5em"
							}}
							variant="circle"
						/>
						<Skeleton
							style={{ maxWidth: "8em", height: "0.93em" }}
							variant="text"
						/>
					</div>
				</div>
				<div className={styles.right}>
					<Button className={styles.button} variant="outlined">
						<IoMdShareAlt />
						Share
					</Button>
					<Button className={styles.button} variant="outlined">
						<BsThreeDots />
					</Button>
				</div>
			</div>
			<div className={styles.bottom}>
				<Skeleton style={{ maxWidth: "6em", height: "1em" }} variant="text" />
			</div>
		</Wrapper>
	</div>
);

export default CollectionDetailsSkeleton;
