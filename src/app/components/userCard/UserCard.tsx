import { useRouter } from "next/navigation";
import UserIcon from "src/assets/inline-icon/user.svg";
import { useCtx } from "src/context/context";
import styles from "./user-card.module.css";
interface IUserCardProps {
	user: User;
	onUserSelect: (id: number) => void;
}

export const UserCard = ({ user: { id, email, name, phone, username, website }, onUserSelect }: IUserCardProps) => {
	const { selectedUserId, posts } = useCtx();
	let isSelected = "";
	if (posts.length) {
		isSelected = selectedUserId !== id ? styles.selected : "";
	}
	return (
		<button onClick={() => onUserSelect(id)} className={`${styles.cardWrapper} ${isSelected}`}>
			<div className={styles.iconWrapper}>
				<UserIcon width="57" height="57" />
			</div>

			<div className={styles.titleName}>{name}</div>

			<div className={styles.infoWrapper}>
				<div>Username: {username}</div>
				<div>Email: {email}</div>
				<div>Phone: {phone}</div>
				<div>
					<span>Website:</span> <a href={`//${website}`}>{website}</a>
				</div>
			</div>
		</button>
	);
};
