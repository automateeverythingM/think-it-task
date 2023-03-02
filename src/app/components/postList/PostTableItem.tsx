import Link from 'next/link';
import { useCtx } from 'src/context/context';
import { actionSetDeletePostId, actionSetShowDeleteModal } from 'src/context/reducer';
import styles from './post-list.module.css';

interface IPostTableItemProps {
	id: number;
	title: string;
}

export const PostTableItem = ({ id, title }: IPostTableItemProps) => {
  const { dispatch } = useCtx();
  const handleDelete = () => {
    dispatch(actionSetDeletePostId(id));
    dispatch(actionSetShowDeleteModal(true));
  };


	return (
		<tr key={id}>
			<td>
				<h4>{title}</h4>
			</td>
			<td>
				<div className={styles.actionButtonsWrapper}>
					<Link href={`post/${id}`} className="btn btn-small btn-outline-blue">
						View
					</Link>
					<button onClick={handleDelete} className="btn btn-small btn-link-danger">Delete</button>
				</div>
			</td>
		</tr>
	);
};
