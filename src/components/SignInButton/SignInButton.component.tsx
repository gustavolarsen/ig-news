import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './SignInButton.module.scss';

const SignInButton = () => {
  const isUserLoggedIn = true;
  return isUserLoggedIn ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d361" />
      tiagoluchtenberg
      <FiX color="#737380" />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#eba417" /> Sign in with Github
    </button>
  );
};

export { SignInButton };