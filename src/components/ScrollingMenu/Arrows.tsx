import { useContext, useEffect, useState } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styles from "./ScrollingMenu.module.scss";

const Arrow = ({
	children,
	disabled,
	onClick,
	style
}: {
	children: React.ReactNode;
	disabled: boolean;
	onClick: VoidFunction;
	style: React.CSSProperties;
}) => {
	return (
		<button
			className={styles.arrow}
			disabled={disabled}
			onClick={onClick}
			style={style}
		>
			{children}
		</button>
	);
};

export const LeftArrow = () => {
	const {
		isFirstItemVisible,
		scrollPrev,
		visibleItemsWithoutSeparators,
		initComplete
	} = useContext(VisibilityContext);

	const [disabled, setDisabled] = useState(
		!initComplete || (initComplete && isFirstItemVisible)
	);

	useEffect(() => {
		if (visibleItemsWithoutSeparators.length) {
			setDisabled(isFirstItemVisible);
		}
	}, [isFirstItemVisible, visibleItemsWithoutSeparators]);

	return (
		<Arrow style={{ left: 0 }} disabled={disabled} onClick={() => scrollPrev()}>
			<MdArrowBackIos />
		</Arrow>
	);
};

export const RightArrow = () => {
	const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
		useContext(VisibilityContext);

	const [disabled, setDisabled] = useState(
		!visibleItemsWithoutSeparators.length && isLastItemVisible
	);

	useEffect(() => {
		if (visibleItemsWithoutSeparators.length) {
			setDisabled(isLastItemVisible);
		}
	}, [isLastItemVisible, visibleItemsWithoutSeparators]);

	return (
		<Arrow style={{ right: 0 }} disabled={disabled} onClick={() => scrollNext()}>
			<MdArrowForwardIos />
		</Arrow>
	);
};
