import { Logo } from "../../logo/Logo";
import styles from "./side-nav.module.css";

interface ISideNavProps {}

export const SideNav = ({}: ISideNavProps) => {
	return (
		<aside className={styles.aside}>
			<nav className={styles.sideNav}>
				<Logo />
			</nav>
		</aside>
	);
};
