import { TopNav } from "./components/header/topNav/TopNav";
import { SideNav } from "./components/header/sideNav/SideNav";
import "./styles/globals.css";
import styles from "./styles/layout.module.css";

export const metadata = {
	title: "Test Dashboard",
	description: "Think IT Test Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div className={styles.mainWrapper}>
					<SideNav />
					<main className={styles.main}>
						<TopNav />
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
