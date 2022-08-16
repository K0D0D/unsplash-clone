import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Toast.module.scss";
import { MdOutlineClose } from "react-icons/md";

interface ICloseButtonProps {
	closeToast: React.MouseEventHandler<HTMLButtonElement>;
}

const CloseButton = ({ closeToast }: ICloseButtonProps) => (
	<button className={styles.closeBtn} onClick={closeToast}>
		<MdOutlineClose />
	</button>
);

const Toast = () => (
	<ToastContainer
		position="top-center"
		autoClose={false}
		draggable={false}
		closeOnClick={false}
		limit={1}
		icon={<></>}
		closeButton={CloseButton}
		transition={Slide}
		className={styles.container}
		toastClassName={styles.toast}
		bodyClassName={styles.body}
	/>
);

export default Toast;
