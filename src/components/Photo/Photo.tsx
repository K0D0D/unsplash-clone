import Button from "../Button/Button";
import styles from "./Photo.module.scss";
import { BsFillHeartFill, BsPlusLg } from "react-icons/bs";
import { ImArrowDown2 } from "react-icons/im";
import { NavLink, useSearchParams } from "react-router-dom";
import { BlurhashCanvas } from "react-blurhash";
import { saveAs } from "file-saver";

interface IProps {
	id: string;
	width: number;
	height: number;
	urls: {
		small: string;
		full: string;
	};
	color: string;
	blurhash: string | null;
	alt: string | null;
	user: {
		name: string;
		profilePic: string;
		username: string;
	};
}

const Photo = ({ id, width, height, urls, color, blurhash, alt, user }: IProps) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const downloadImage = () => saveAs(urls.full, `${user.username}-${id}-unflash.jpg`);

	const setPhotoIdParam = () => {
		searchParams.set("photo_id", id);

		setSearchParams(searchParams);
	};

	return (
		<div
			className={styles.container}
			style={{
				paddingTop: (height / width) * 100 + "%",
				backgroundColor: color
			}}
		>
			{blurhash && <BlurhashCanvas className={styles.blur} hash={blurhash} />}
			<button className={styles.imageBtn} onClick={setPhotoIdParam}>
				<img className={styles.image} src={urls.small} alt={alt || ""} />
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
					<NavLink to={`/users/${user.username}/photos`}>
						<img
							className={styles.profilePic}
							src={user.profilePic}
							alt="user profile"
						/>
					</NavLink>
					<NavLink
						className={styles.name}
						to={`/users/${user.username}/photos`}
					>
						{user.name}
					</NavLink>
				</div>
				<Button className={styles.button} onClick={downloadImage}>
					<ImArrowDown2 />
				</Button>
			</footer>
		</div>
	);
};

export default Photo;
