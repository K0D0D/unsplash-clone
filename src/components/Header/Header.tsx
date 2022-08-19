import { NavLink, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SiUnsplash } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import styles from "./Header.module.scss";
import SearchForm from "../SearchForm/SearchForm";
import Button from "../Button/Button";
import { ChangeEvent, FormEvent, useLayoutEffect, useState } from "react";
import Topics from "../Topics/Topics";
import SearchNav from "../SearchNav/SearchNav";

const Header = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [isItSearchPage, setIsItSearchPage] = useState<boolean>(false);
	const [isItUserPage, setIsItUserPage] = useState<boolean>(false);
	const [isItCollectionPage, setIsItCollectionPage] = useState<boolean>(false);
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useLayoutEffect(() => {
		setIsItSearchPage(pathname.includes("/s/"));

		if (pathname === "/") return setInputValue("");

		if (isItSearchPage) {
			const query = searchParams.get("q") || "";

			setInputValue(query);
		}
	}, [pathname, isItSearchPage, searchParams]);

	useLayoutEffect(() => {
		setIsItCollectionPage(
			pathname.includes("/collections/") && !pathname.includes("/s/")
		);
	}, [pathname, isItCollectionPage]);

	useLayoutEffect(() => {
		setIsItUserPage(pathname.includes("/users/") && !pathname.includes("/s/"));
	}, [pathname, isItUserPage]);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const onClearBtnClick = () => {
		setInputValue("");
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const query = encodeURIComponent(inputValue.toLowerCase().trim());

		if (query)
			navigate({
				pathname: "/s/photos/",
				search: `q=${query}`
			});
	};

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<NavLink className={styles.logo} to="/">
					<SiUnsplash />
				</NavLink>
				<SearchForm
					inputValue={inputValue}
					onChange={onChange}
					onClearBtnClick={onClearBtnClick}
					onSubmit={onSubmit}
				/>
				<div className={styles.links}>
					<NavLink className={styles.link} to="/">
						Explore
					</NavLink>
					<NavLink className={styles.link} to="/">
						Advertise
					</NavLink>
					<NavLink className={styles.link} to="/">
						Blog
					</NavLink>
				</div>
				<div className={styles.separator}></div>
				<div className={styles.auth}>
					<NavLink className={styles.link} to="/">
						Log in
					</NavLink>
					/
					<NavLink className={styles.link} to="/">
						Sign up
					</NavLink>
				</div>
				<Button className={styles.submitPhoto} variant="outlined">
					Submit a photo
				</Button>
				<button className={styles.menuBtn} title="View more links">
					<FiMenu />
				</button>
			</nav>
			{!isItCollectionPage && !isItUserPage && (
				isItSearchPage ? <SearchNav /> : <Topics />
			)}
		</header>
	);
};

export default Header;
