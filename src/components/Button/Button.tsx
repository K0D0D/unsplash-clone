import styles from "./Button.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: "contained" | "outlined";
	children?: React.ReactNode;
	[x: string]: any;
}

const Button = ({ className = "", children, variant = "contained", ...rest }: IProps) => (
	<button className={`${styles.button} ${styles[variant]} ${className}`} {...rest}>
		{children || "Button"}
	</button>
);

export default Button;
