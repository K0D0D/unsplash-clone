import styles from "./Topics.module.scss";
import { NavLink } from "react-router-dom";
import ScrollingMenu from "../ScrollingMenu/ScrollingMenu";
import { ITopic } from "../../api/types";

const topics: ITopic[] = [
	{ slug: "current-events", title: "Current Events" },
	{ slug: "wallpapers", title: "Wallpapers" },
	{ slug: "3d-renders", title: "3D Renders" },
	{ slug: "textures-patterns", title: "Textures & Patterns" },
	{ slug: "experimental", title: "Experimental" },
	{ slug: "architecture", title: "Architecture" },
	{ slug: "nature", title: "Nature" },
	{ slug: "business-work", title: "Business & Work" },
	{ slug: "fashion", title: "Fashion" },
	{ slug: "film", title: "Film" },
	{ slug: "food-drink", title: "Food & Drink" },
	{ slug: "health", title: "Health & Wellness" },
	{ slug: "people", title: "People" },
	{ slug: "interiors", title: "Interiors" },
	{ slug: "street-photography", title: "Street Photography" },
	{ slug: "travel", title: "Travel" },
	{ slug: "animals", title: "Animals" },
	{ slug: "spirituality", title: "Spirituality" },
	{ slug: "arts-culture", title: "Arts & Culture" },
	{ slug: "history", title: "History" },
	{ slug: "athletics", title: "Athletics" }
];

const Topics = () => {
	const checkActiveClassName = ({ isActive }: { isActive: boolean }) => {
		return isActive ? `${styles.topic} ${styles.active}` : styles.topic;
	};

	return (
		<nav className={styles.nav}>
			<div className={styles.topics}>
				<NavLink className={checkActiveClassName} to="/">
					Editorial
				</NavLink>
			</div>
			<div className={styles.separator}></div>
			<div className={styles.topics}>
				<ScrollingMenu itemClassName={styles.topicItem}>
					{topics.map((topic, index) => (
						<NavLink
							className={checkActiveClassName}
							to={`t/${topic.slug}`}
							key={index}
						>
							{topic.title}
						</NavLink>
					))}
				</ScrollingMenu>
			</div>
		</nav>
	);
};

export default Topics;
