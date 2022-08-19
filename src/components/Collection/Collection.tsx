import { BlurhashCanvas } from "react-blurhash";
import { NavLink } from "react-router-dom";
import { IPreviewPhoto } from "../../api/types";
import styles from "./Collection.module.scss";

interface IProps {
	id: string;
	title: string;
	totalPhotos: number;
	name: string;
	photos: IPreviewPhoto[];
	username: string;
}

const Collection = ({ id, title, totalPhotos, name, photos, username }: IProps) => (
	<div>
		<NavLink className={styles.link} to={`/collections/${id}`}>
			<div className={styles.images}>
				<div className={styles.grid}>
					{Array.from(Array(3), (_, i) => (
						<div className={styles.imageContainer} key={i}>
							{photos[i] && (
								<>
									{photos[i].blur_hash && (
										<BlurhashCanvas
											className={styles.blur}
											hash={photos[i].blur_hash!}
										/>
									)}
									<img
										className={styles.image}
										src={photos[i].urls.small}
										alt=""
									/>
								</>
							)}
						</div>
					))}
				</div>
			</div>
			<span className={styles.title}>{title}</span>
		</NavLink>
		<p className={styles.info}>
			{totalPhotos} photos · Curated by{" "}
			<NavLink to={`/users/${username}/photos`}>{name}</NavLink>
		</p>
	</div>
);

export default Collection;
