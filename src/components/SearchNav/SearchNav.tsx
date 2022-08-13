import { NavLink, useSearchParams } from "react-router-dom";
import styles from "./SearchNav.module.scss";
import { MdImage } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";

const SearchNav = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q") || "";

	const checkActiveClassName = ({ isActive }: { isActive: boolean }) => {
		return isActive ? `${styles.link} ${styles.active}` : styles.link;
	};

	return (
		<>
			<div className={styles.gap}></div>
			<nav className={styles.nav}>
				<NavLink
					className={checkActiveClassName}
					to={`/s/photos/?q=${encodeURIComponent(query)}`}
				>
					<MdImage />
					Photos
				</NavLink>
				<NavLink
					className={checkActiveClassName}
					to={`/s/collections/?q=${encodeURIComponent(query)}`}
				>
					<BsStack />
					Collections
				</NavLink>
				<NavLink
					className={checkActiveClassName}
					to={`/s/users/?q=${encodeURIComponent(query)}`}
				>
					<HiUsers />
					Users
				</NavLink>
			</nav>
		</>
	);
};

export default SearchNav;
