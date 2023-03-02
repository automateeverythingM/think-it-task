import UserIcon from "src/assets/inline-icon/user.svg";
import styles from "./user-card.module.css";
interface IUserCardProps {}

export const UserCard = ({}: IUserCardProps) => {
	return (
		<div className={styles.cardWrapper}>
			<div className={styles.iconWrapper}>
				<UserIcon width="57" height="57" />
			</div>

			<div className={styles.titleName}>Name</div>

			<div className={styles.infoWrapper}>
				<div>Username: ...</div>
				<div>Email: ...</div>
				<div>Phone: ...</div>
			</div>
		</div>
	);
};
