import SearchForm from "../SearchForm/SearchForm";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Hero.module.scss";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const navigate = useNavigate();

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
		<div className={styles.hero}>
			<Wrapper>
				<div className={styles.inner}>
					<h1 className={styles.title}>Unflash</h1>
					<p className={styles.text}>
						The internet's source of freely-usable images.
						<br />
						Powered by creators everywhere.
					</p>
					<SearchForm
						formClassName={styles.form}
						searchBtnClassName={styles.searchBtn}
						inputValue={inputValue}
						onChange={onChange}
						onClearBtnClick={onClearBtnClick}
						onSubmit={onSubmit}
					/>
				</div>
			</Wrapper>
		</div>
	);
};

export default Hero;
