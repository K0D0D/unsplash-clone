import InfiniteScroll from "react-infinite-scroll-component";
import { ICollection } from "../../api/types";
import Collection from "../Collection/Collection";
import CollectionSkeleton from "../Collection/CollectionSkeleton";
import NoResults from "../NoResults/NoResults";
import Spinner from "../Spinner/Spinner";
import styles from "./Collections.module.scss";

interface IProps {
	collections: ICollection[];
	isLoading: boolean;
	pageSize: number;
	hasMore: boolean;
	fetchNext: () => any;
}

const Collections = ({
	collections,
	isLoading,
	pageSize,
	hasMore,
	fetchNext
}: IProps) => (
	<InfiniteScroll
		dataLength={collections?.length}
		next={fetchNext}
		hasMore={hasMore}
		loader={<Spinner />}
		scrollThreshold={0.7}
		style={{ overflow: "visible" }}
	>
		<div className={styles.inner}>
			{collections?.length
				? collections.map((collection, index) => (
						<Collection
							id={collection.id}
							title={collection.title}
							totalPhotos={collection.total_photos}
							name={collection.user.name}
							photos={collection.preview_photos}
							username={collection.user.username}
							key={`${collection.id}_${index}`}
						/>
				  ))
				: isLoading &&
				  Array.from(Array(pageSize), (_, i) => <CollectionSkeleton key={i} />)}
		</div>
		{!collections?.length && !isLoading && <NoResults />}
	</InfiniteScroll>
);

export default Collections;
