import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>

      <main className={styles.home}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <span>React</span> world
          </h1>
          <p>
            Get access to all publications <span>for 9.99 month</span>
          </p>
          <button type="button">Subscribe</button>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
};

export default Home;
