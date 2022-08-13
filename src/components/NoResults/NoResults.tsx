import image from "../../assets/no_results.png";
import styles from "./NoResults.module.scss";

const NoResults = () => (
    <div className={styles.container}>
        <img className={styles.img} src={image} alt="No content available" />
    </div>
);

export default NoResults;