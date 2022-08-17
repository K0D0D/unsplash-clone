import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import { fetchPhotoDetails } from "../../store/photoDetails/photoDetailsThunks";
import Modal from "../Modal/Modal";
import PhotoDetails from "../PhotoDetails/PhotoDetails";
import styles from "./PhotoModal.module.scss";

const PhotoModal = () => {
	const dispatch = useAppDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const photoId = searchParams.get("photo_id");
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const deletePhotoIdParam = () => {
		searchParams.delete("photo_id");

		setSearchParams(searchParams);
	};

	useEffect(() => {
		setIsOpen(!!photoId);

		if (photoId) dispatch(fetchPhotoDetails(photoId));
	}, [dispatch, photoId]);

	return (
		<Modal className={styles.container} onClose={deletePhotoIdParam} isOpen={isOpen}>
			<PhotoDetails />
		</Modal>
	);
};

export default PhotoModal;
