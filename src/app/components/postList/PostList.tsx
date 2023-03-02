import FileIcon from "src/assets/inline-icon/file.svg";
import styles from "./post-list.module.css";

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
							<tr key={id}>
								<td>
									<h4>{title}</h4>
								</td>
								<td>
									<div className={styles.actionButtonsWrapper}>
										<button className="btn btn-small btn-outline-blue">View</button>
										<button className="btn btn-small btn-link-danger">Delete</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
