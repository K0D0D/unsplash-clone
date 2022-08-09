import styles from "./SearchForm.module.scss";
import { IoSearch } from "react-icons/io5";
import { MdOutlineImageSearch, MdOutlineClear } from "react-icons/md";
import { ChangeEventHandler, FormEventHandler } from "react";

interface IProps {
	formClassName?: string;
	searchBtnClassName?: string;
	inputClassName?: string;
	imageBtnClassName?: string;
	clearBtnClassName?: string;
	inputValue: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	onClearBtnClick: React.MouseEventHandler<HTMLButtonElement>;
	onSubmit: FormEventHandler<HTMLFormElement>;
}

const SearchForm = ({
	formClassName = "",
	searchBtnClassName = "",
	inputClassName = "",
	imageBtnClassName = "",
	clearBtnClassName = "",
	inputValue,
	onChange,
	onClearBtnClick,
	onSubmit
}: IProps) => (
	<form
		className={`${styles.form} ${formClassName}`}
		title="Search unflash"
		onSubmit={onSubmit}
	>
		<button className={`${styles.searchBtn} ${searchBtnClassName}`} type="submit">
			<IoSearch />
		</button>
		<input
			className={`${styles.input} ${inputClassName}`}
			placeholder="Search free high-resolution photos"
			onChange={onChange}
			value={inputValue}
		/>
		{!!inputValue && (
			<button
				className={`${styles.clearBtn} ${clearBtnClassName}`}
				onClick={onClearBtnClick}
				type="button"
			>
				<MdOutlineClear />
			</button>
		)}
		<button
			className={`${styles.imageBtn} ${imageBtnClassName}`}
			title="Visual search"
			type="button"
		>
			<MdOutlineImageSearch />
		</button>
	</form>
);

export default SearchForm;
