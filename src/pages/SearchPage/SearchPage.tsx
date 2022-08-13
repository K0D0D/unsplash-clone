import { Navigate, useParams, useSearchParams } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "./SearchPage.module.scss";
import SearchPhotos from "../../components/SearchPhotos/SearchPhotos";
import SearchCollections from "../../components/SearchCollections/SearchCollections";
import SearchUsers from "../../components/SearchUsers/SearchUsers";

type RouteParams = {
	type: "photos" | "collections" | "users";
};

const SearchPage = () => {
	const { type } = useParams() as RouteParams;
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q") || "";

	return (
		<Wrapper>
			<div className={styles.top}>
				<h1 className={styles.title}>{query}</h1>
			</div>
			{(() => {
				switch (type) {
					case "photos":
						return <SearchPhotos />;
					case "collections":
						return <SearchCollections />;
					case "users":
						return <SearchUsers />;
					default:
						return <Navigate to="/404" />;
				}
			})()}
			<div className={styles.bottom}>
				<h2 className={styles.subtitle}>
					Browse premium images on iStock
					<span> | 20% off at iStock</span>
				</h2>
			</div>
		</Wrapper>
	);
};

export default SearchPage;
