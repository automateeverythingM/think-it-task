import UserIcon from "src/assets/inline-icon/user.svg";
import styles from "./user-card.module.css";
interface IUserCardProps {
	user: User;
	onUserSelect: (id: string) => void;
}

export const UserCard = ({ user: { id, email, name, phone, username, website }, onUserSelect }: IUserCardProps) => {
	return (
		<button onClick={() => onUserSelect(id)} className={styles.cardWrapper}>
			<div className={styles.iconWrapper}>
				<UserIcon width="57" height="57" />
			</div>

			<div className={styles.titleName}>{name}</div>

			<div className={styles.infoWrapper}>
				<div>Username: {username}</div>
				<div>Email: {email}</div>
				<div>Phone: {phone}</div>
				<div>
					<span>Website:</span> 
					{" "}
					<a href={`//${website}`}>{website}</a>
				</div>
			</div>
		</button>
	);
};
