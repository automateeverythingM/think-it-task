import FileIcon from "src/assets/inline-icon/file.svg";
import styles from "./post-list.module.css";

interface IPostListProps {}

const posts = Array.from({ length: 10 }, (_, i) => ({
	id: i,
	title: `Post ${i}`,
}));

export const PostList = ({}: IPostListProps) => {
	
	return (
		<div>
			<div className={styles.titleWrapper}>
				<div className={styles.iconWrapper}>
					<FileIcon width="16" height="20" />
				</div>
				<h3 className={styles.listTitle}>User 1 Posts</h3>
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
						{posts.map(({id, title}) => (
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
