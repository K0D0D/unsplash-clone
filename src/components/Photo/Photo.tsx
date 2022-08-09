import Button from "../Button/Button";
import styles from "./Photo.module.scss";
import { BsFillHeartFill, BsPlusLg } from "react-icons/bs";
import { ImArrowDown2 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { BlurhashCanvas } from "react-blurhash";

interface IProps {
	width: number;
	height: number;
	url: string;
	color: string;
	blurhash: string | null;
	alt: string | null;
	user: {
		name: string;
		profilePic: string;
		username: string;
	};
}

const Photo = ({ width, height, url, color, blurhash, alt, user }: IProps) => (
	<div
		className={styles.container}
		style={{
			paddingTop: (height / width) * 100 + "%",
			backgroundColor: color
		}}
	>
		{blurhash && <BlurhashCanvas className={styles.blur} hash={blurhash} />}
		<button className={styles.imageBtn}>
			<img className={styles.image} src={url} alt={alt || ""} />
		</button>
		<header className={styles.header}>
			<Button className={styles.button} title="Like">
				<BsFillHeartFill />
			</Button>
			<Button className={styles.button} title="Add to collection">
				<BsPlusLg />
			</Button>
		</header>
		<footer className={styles.footer}>
			<div className={styles.user}>
				<NavLink to="/">
					<img
						className={styles.profilePic}
						src={user.profilePic}
						alt="user profile"
						loading="lazy"
					/>
				</NavLink>
				<NavLink className={styles.name} to="/">
					{user.name}
				</NavLink>
			</div>
			<Button className={`${styles.button}`}>
				<ImArrowDown2 />
			</Button>
		</footer>
	</div>
);

export default Photo;
