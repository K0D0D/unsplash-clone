import { useSearchParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import PhotoDetails from "../PhotoDetails/PhotoDetails";
import styles from "./PhotoModal.module.scss";

const PhotoModal = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const photoId = searchParams.get("photo_id");

	const deletePhotoIdParam = () => {
		searchParams.delete("photo_id");

		setSearchParams(searchParams);
	};

	return (
		<Modal className={styles.container} onClose={deletePhotoIdParam} isOpen={!!photoId}>
			<PhotoDetails />
		</Modal>
	);
};

export default PhotoModal;
