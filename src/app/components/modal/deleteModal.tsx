import { Modal } from "./modal";
import styles from "./delete-modal.module.css";
import { useCtx } from "src/context/context";
interface IDeleteModalProps {
	showModal: boolean;
	onDelete: (id: number) => void;
	onCancel: () => void;
}

export const DeleteModal = ({ showModal, onDelete, onCancel }: IDeleteModalProps) => {
	const { deletePostId } = useCtx();
	if (!showModal || !deletePostId) return null;
	return (
		<Modal
			title="Delete Post"
			body={
				<>
					<p>Are you sure you want to delete this post?</p>
					<div className={styles.buttonContainer}>
						<button onClick={onCancel} className={`btn btn-small btn-outline-blue ${styles.deleteButton}`}>
							Cancel
						</button>
						<button onClick={() => onDelete(deletePostId)} className={`btn btn-link-danger ${styles.deleteButton}`}>
							Delete
						</button>
					</div>
				</>
			}
		/>
	);
};
