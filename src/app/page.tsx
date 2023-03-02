"use client";
import { useMemo } from "react";
import { useCtx } from "src/context/context";
import { actionSetActiveUser, actionSetPosts } from "src/context/reducer";
import { fetcher } from "src/helpers/fetcher";
import { PostList } from "./components/postList/PostList";
import { UsersList } from "./components/usersList/usersList";
import styles from "./styles/page.module.css";

export default function Home() {
	const { dispatch, users, posts, selectedUserId } = useCtx();

	const selectedUserName = useMemo(() => users.find((user) => user.id === selectedUserId)?.name, [users, selectedUserId]);

	const onUserSelect = (id: string) => {
		dispatch(actionSetActiveUser(id));
		fetcher(`/users/${id}/posts`)
		.then((posts) => dispatch(actionSetPosts(posts)));

	};
	return (
		<div className={styles.pageWrapper}>
			<UsersList users={users} onUserSelect={onUserSelect} />
			<PostList posts={posts} name={selectedUserName} />
		</div>
	);
}
