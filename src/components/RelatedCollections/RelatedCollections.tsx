import { ICollection } from "../../api/types";
import Collection from "../Collection/Collection";
import styles from "./RelatedCollections.module.scss";

interface IProps {
	collections: ICollection[];
}

const RelatedCollections = ({ collections }: IProps) => (
	<div className={styles.collections}>
		{collections.map((collection) => (
			<Collection
				id={collection.id}
				photos={collection.preview_photos}
				title={collection.title}
				totalPhotos={collection.total_photos}
				name={collection.user.name}
				username={collection.user.username}
				key={collection.id}
			/>
		))}
	</div>
);

export default RelatedCollections;
