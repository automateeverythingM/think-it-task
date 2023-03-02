import { ReactNode } from "react";
import styles from "./modal.module.css";
import CloseIcon from "src/assets/inline-icon/close.svg";
interface IModalProps {
	title: ReactNode;
	body: ReactNode;
}

export const Modal = ({ title, body }: IModalProps) => {
	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modal}>
				<button className={styles.closeButton}>
					<CloseIcon width="16" height="16" />
				</button>
				<h4>{title}</h4>
				<div>{body}</div>
			</div>
		</div>
	);
};
