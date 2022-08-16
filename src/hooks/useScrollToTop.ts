import { useLayoutEffect } from "react";

const useScrollToTop = (deps: any[]) => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [deps]);
};

export default useScrollToTop;
