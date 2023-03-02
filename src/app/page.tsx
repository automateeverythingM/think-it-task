import { PostList } from "./components/postList/PostList";
import { UsersList } from "./components/usersList/usersList";
import styles from "./styles/page.module.css";

export default function Home() {
	return (
		<div className={styles.pageWrapper}>
			<UsersList />
			<PostList />
		</div>
	);
}
