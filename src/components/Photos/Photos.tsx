import Photo from "../Photo/Photo";
import styles from "./Photos.module.scss";
import Masonry from "react-masonry-css";
import Spinner from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { IPhoto } from "../../api/types";
import PhotoSkeleton from "../Photo/PhotoSkeleton";
import NoResults from "../NoResults/NoResults";

const masonryBreakpoints = {
	default: 3,
	991: 2,
	767: 1
};

interface IProps {
	photos: IPhoto[];
	isLoading: boolean;
	pageSize: number;
	hasMore: boolean;
	fetchNext: () => any;
}

const Photos = ({ photos, isLoading, pageSize, hasMore, fetchNext }: IProps) => (
	<>
		<InfiniteScroll
			dataLength={photos?.length}
			next={fetchNext}
			hasMore={hasMore}
			loader={<Spinner />}
			scrollThreshold={0.7}
			style={{ overflow: "visible" }}
		>
			<Masonry
				className={styles.inner}
				columnClassName={styles.column}
				breakpointCols={masonryBreakpoints}
			>
				{photos?.length
					? photos.map((photo, index) => (
							<Photo
								id={photo.id}
								width={photo.width}
								height={photo.height}
								urls={photo.urls}
								color={photo.color}
								blurhash={photo.blur_hash}
								alt={photo.alt_description}
								user={{
									name: photo.user.name,
									username: photo.user.username,
									profilePic: photo.user.profile_image.small
								}}
								key={`${photo.id}_${index}`}
							/>
					  ))
					: isLoading &&
					  Array.from(Array(pageSize), (_, i) => <PhotoSkeleton key={i} />)}
			</Masonry>
			{!photos?.length && !isLoading && <NoResults />}
		</InfiniteScroll>
	</>
);

export default Photos;
