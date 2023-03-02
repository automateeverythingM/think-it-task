import UserIcon from "src/assets/inline-icon/user-line.svg";
import { UserCard } from "src/app/components/userCard/UserCard";
import styles from "./users-list.module.css";
interface IUsersListProps {}

const users = Array.from({ length: 5 }, (_, i) => ({ id: i }));

export const UsersList = ({}: IUsersListProps) => {
	return (
		<div>
			<div className={styles.listTitleContainer}>
				<div className={styles.iconWrapper}>
					<UserIcon width="35" height="35" />
				</div>
				<h3 className={styles.listTitle}>Users</h3>
			</div>

			<div className={styles.listContainer}>
				{users.map((user) => (
					<UserCard key={user.id} />
				))}
			</div>
		</div>
	);
};
