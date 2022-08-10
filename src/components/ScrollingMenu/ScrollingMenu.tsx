import styles from "./ScrollingMenu.module.scss";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";

interface IProps {
	itemClassName: string;
	children: React.ReactElement | React.ReactElement[];
}

const ScrollingMenu = ({ itemClassName, children }: IProps) => (
	<ScrollMenu
		itemClassName={itemClassName}
		wrapperClassName={styles.wrapper}
		scrollContainerClassName={styles.container}
		LeftArrow={LeftArrow}
		RightArrow={RightArrow}
		options={{ threshold: [0.01, 0.01, 0.02, 0.03, 0.04, 1] }}
	>
		{children}
	</ScrollMenu>
);

export default ScrollingMenu;
