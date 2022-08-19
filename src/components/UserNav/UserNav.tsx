import { BsFillHeartFill, BsStack } from "react-icons/bs";
import { MdImage } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import { selectUserDetailsData } from "../../store/user/userDetails/userDetailsSelectors";
import styles from "./UserNav.module.scss";

const UserNav = () => {
	const details = useAppSelector(selectUserDetailsData)!;

	const checkActiveClassName = ({ isActive }: { isActive: boolean }) => {
		return isActive ? `${styles.link} ${styles.active}` : styles.link;
	};

	return (
		<nav className={styles.nav}>
			<NavLink
				className={checkActiveClassName}
				to={`/users/${details.username}/photos`}
			>
				<MdImage />
				Photos
				<span className={styles.number}>{details.total_photos}</span>
			</NavLink>
			<NavLink
				className={checkActiveClassName}
				to={`/users/${details.username}/likes`}
			>
				<BsFillHeartFill />
				Likes <span className={styles.number}>{details.total_likes}</span>
			</NavLink>
			<NavLink
				className={checkActiveClassName}
				to={`/users/${details.username}/collections`}
			>
				<BsStack />
				Collections
				<span className={styles.number}>{details.total_collections}</span>
			</NavLink>
		</nav>
	);
};

export default UserNav;
