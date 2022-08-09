import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import { SiUnsplash } from "react-icons/si";

const Footer = () => (
	<footer className={styles.footer}>
		<NavLink className={styles.logo} to="/">
			<SiUnsplash />
		</NavLink>
		<p className={styles.text}>Make something awesome</p>
	</footer>
);

export default Footer;