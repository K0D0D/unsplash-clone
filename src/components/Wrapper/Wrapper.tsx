import styles from "./Wrapper.module.scss";

interface IProps {
	children?: React.ReactNode;
}

const Wrapper = ({ children }: IProps) => (
	<div className={styles.wrapper}>{children}</div>
);

export default Wrapper;
