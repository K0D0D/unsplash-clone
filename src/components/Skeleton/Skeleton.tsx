import ContentLoader from "react-content-loader";
import { IContentLoaderProps } from "react-content-loader";
import styles from "./Skeleton.module.scss";

interface IProps extends IContentLoaderProps {
	variant: "text" | "circle" | "rect";
}

const Skeleton = ({ variant = "text", className = "", ...rest }: IProps) => (
	<ContentLoader
		speed={1}
		backgroundColor="#F4F4F4"
		foregroundColor="#ECECEC"
		className={`${styles[variant]} ${className}`}
		{...rest}
	>
		<rect x="0" y="0" width="100%" height="100%" />
	</ContentLoader>
);

export default Skeleton;
