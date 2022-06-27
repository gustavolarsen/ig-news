import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from './SignInButton.module.scss';

const SignInButton = () => {
  const { data: session } = useSession();

  const handleSingIn = () => {
    signIn('github');
  };

  const handleSingOut = () => {
    signOut();
  };

  return session ? (
    <button
      className={styles.signInButton}
      type="button"
      onClick={handleSingOut}
    >
      <FaGithub color="#04d361" />
      {session.user?.name}
      <FiX color="#737380" />
    </button>
  ) : (
    <button
      className={styles.signInButton}
      type="button"
      onClick={handleSingIn}
    >
      <FaGithub color="#eba417" /> Sign in with Github
    </button>
  );
};

export { SignInButton };
