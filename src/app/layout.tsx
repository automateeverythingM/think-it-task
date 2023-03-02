'use client';
import { useReducer, useEffect } from "react";
import { TopNav } from "./components/header/topNav/TopNav";
import { SideNav } from "./components/header/sideNav/SideNav";
import styles from "./styles/layout.module.css";
import {  initState, Provider } from "src/context/context";
import "./styles/globals.css";
import Head from "next/head";
import { fetcher } from "src/helpers/fetcher";
import { actionSetUsers, reducer } from "src/context/reducer";

const metadata = {
	title: "Test Dashboard",
	description: "Think IT Test Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(reducer, initState);
	
	useEffect(() => {
		fetcher('/users').then((users) => dispatch(actionSetUsers(users.slice(0, 5))));
	}, []);
	
	return (
		<html lang="en">
			<body>
				<Provider value={{...state, dispatch}}>
				<Head>
					<title>{metadata.title}</title>
					<meta name="description" content={metadata.description} />
				</Head>
				<div className={styles.mainWrapper}>
					<SideNav />
					<main className={styles.main}>
						<TopNav />
						{children}
					</main>
				</div>
				</Provider>
			</body>
		</html>
	);
}
