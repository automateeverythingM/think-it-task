import styles from "./top-nav.module.css";
import UserIcon from 'src/assets/inline-icon/user.svg';
import { BiUser } from "react-icons/bi";
interface ITopNavProps {}

export const TopNav = ({}: ITopNavProps) => {
  return <nav className={styles.topNav}>
      <h1 className={styles.title}>Test</h1>

      <div className={styles.userContainer}>
        <span className={styles.userName}>Name</span>
        <UserIcon width="40" height="40" />
      </div>
  </nav>;
};
