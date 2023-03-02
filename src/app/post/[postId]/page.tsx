import { fetcher } from "src/helpers/fetcher";
import styles from "./post.module.css";
interface IPageProps {
	params: {
		postId: string;
	};
}

const Page = async ({ params: { postId } }: IPageProps) => {
	const post = await fetcher(`/posts/${postId}`);
	return (
		<div className={styles.postWrapper}>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</div>
	);
};

export default Page;
