import { NavLink } from "react-router-dom";
import { SiUnsplash } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import styles from "./Header.module.scss";
import SearchForm from "../SearchForm/SearchForm";
import Button from "../Button/Button";
import { ChangeEvent, FormEvent, useState } from "react";

const Header = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const onClearBtnClick = () => {
        setInputValue("");
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
        </header>
    );
};

export default Header;