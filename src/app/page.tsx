"use client";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useCtx } from "src/context/context";
import { actionSetActiveUser, actionSetPosts, actionSetShowDeleteModal } from "src/context/reducer";
import { fetcher } from "src/helpers/fetcher";
import { DeleteModal } from "./components/modal/deleteModal";
import { Modal } from "./components/modal/modal";
import { PostList } from "./components/postList/PostList";
import { UsersList } from "./components/usersList/usersList";
import styles from "./styles/page.module.css";

interface IHomeProps {
	searchParams: {
		id: string;
	};
}

export default function Home({ searchParams }: IHomeProps) {
	const router = useRouter();
	const userId = Number(searchParams.id);
	const { dispatch, users, posts, showDeleteModal } = useCtx();

	useEffect(() => {
		if (userId) {
			dispatch(actionSetActiveUser(userId));
			fetcher(`/users/${userId}/posts`).then((posts) => dispatch(actionSetPosts(posts)));
		}
	}, [dispatch, userId]);

	const onCancelDelete = () => {
		dispatch(actionSetShowDeleteModal(false));
	};

	const onDelete = (id: number) => {
		dispatch(actionSetShowDeleteModal(false));
		fetcher(`/posts/${id}`, { method: "DELETE" }).then(() => {
			dispatch(actionSetPosts(posts.filter((p) => p.id !== id)));
		});
	};

	const selectedUserName = useMemo(() => users.find((u) => u.id === userId)?.name, [users, userId]);

	const onUserSelect = (id: string) => {
		router.push(`/?id=${id}`);
	};
	return (
		<div className={styles.pageWrapper}>
			<UsersList users={users} onUserSelect={onUserSelect} />
			<PostList posts={posts} name={selectedUserName} />
			<DeleteModal showModal={showDeleteModal} onCancel={onCancelDelete} onDelete={onDelete} />
		</div>
	);
}
