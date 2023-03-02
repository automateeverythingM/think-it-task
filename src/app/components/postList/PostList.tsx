import Link from "next/link";
import FileIcon from "src/assets/inline-icon/file.svg";
import styles from "./post-list.module.css";
import { PostTableItem } from "./PostTableItem";

interface IPostListProps {
	posts: Post[];
	name: string | undefined;
}

export const PostList = ({ posts, name }: IPostListProps) => {
	if(!name) return (
		<div className={styles.noPostsWrapper}>
			<h4>Select a user to see their posts</h4>
		</div>
	);

	if(!posts.length) return (
		<div className={styles.noPostsWrapper}>
			<h4>No posts found</h4>
		</div>
	);
	return (
		<div>
			<div className={styles.titleWrapper}>
				<div className={styles.iconWrapper}>
					<FileIcon width="16" height="20" />
				</div>
				<h3 className={styles.listTitle}>{name} Posts</h3>
			</div>
			<div className={styles.tableWrapper}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>TITLE</th>
							<th>ACTIONS</th>
						</tr>
					</thead>
					<tbody>
						{posts?.map(({ id, title }) => (
							<PostTableItem key={id} id={id} title={title} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
