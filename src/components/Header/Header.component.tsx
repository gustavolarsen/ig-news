import styles from './Header.module.scss';
import { SignInButton } from '../SignInButton/SignInButton.component';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig news" />
        <nav>
          <a className={styles.active} href="">
            Home
          </a>
          <a href="">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};

export { Header };
