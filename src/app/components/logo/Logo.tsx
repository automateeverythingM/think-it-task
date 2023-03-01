import Link from "next/link";
import styles from "./logo.module.css";
interface ILogoProps {}

export const Logo = ({}: ILogoProps) => {
	return (
		<Link className={styles.logo} href="/">
			ThinkIT Test
		</Link>
	);
};
