import { IPreviewPhoto } from "../../api/types";
import styles from "./UserCard.module.scss";
import Button from "../Button/Button";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BlurhashCanvas } from "react-blurhash";
import { NavLink } from "react-router-dom";

interface IProps {
	name: string;
	username: string;
	photos: IPreviewPhoto[];
	profilePic: string;
}

const UserCard = ({ name, username, photos, profilePic }: IProps) => (
	<div className={styles.container}>
		<div className={styles.profile}>
			<NavLink className={styles.left} to={`/users/${username}/photos`}>
				<img className={styles.avatar} src={profilePic} alt="" />
				<div className={styles.info}>
					<p className={styles.name}>{name}</p>
					<p className={styles.username}>@{username}</p>
				</div>
			</NavLink>
			<Button className={styles.follow} variant="outlined" title="Follow">
				<MdPersonAddAlt1 />
			</Button>
		</div>
		{!!photos.length && (
			<NavLink className={styles.images} to={`/users/${username}/photos`}>
				{Array.from(Array(3), (_, i) => (
					<div className={styles.imageContainer} key={i}>
						{photos[i] && (
							<>
								{photos[i].blur_hash && (
									<BlurhashCanvas
										className={styles.blur}
										hash={photos[i].blur_hash!}
									/>
								)}
								<img
									className={styles.image}
									src={photos[i].urls.small}
									alt=""
								/>
							</>
						)}
					</div>
				))}
			</NavLink>
		)}
		<NavLink className={styles.viewProfile} to={`/users/${username}/photos`}>
			View profile
		</NavLink>
	</div>
);

export default UserCard;
