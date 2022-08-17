import styles from "./Modal.module.scss";
import ReactModal from "react-modal";
import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface IProps {
	className?: string;
	children: ReactNode;
	onClose: () => any;
	isOpen: boolean;
}

const Modal = ({ className = "", children, onClose, isOpen }: IProps) => (
	<ReactModal
		isOpen={isOpen}
		onRequestClose={onClose}
		overlayClassName={styles.overlay}
		className={`${styles.content} ${className}`}
	>
		<button className={styles.closeBtn} onClick={onClose}>
			{<MdClose />}
		</button>
		<div className={styles.inner}>{children}</div>
	</ReactModal>
);

export default Modal;
