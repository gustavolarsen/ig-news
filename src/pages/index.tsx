import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton/Subscribe.component';
import { stripe } from '../services/stripe';
import styles from '../styles/Home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}
const Home = ({ product }: HomeProps) => {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>

      <main className={styles.home}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world
          </h1>
          <p>
            Get access to all publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1LF08wGMbVOYsYjdBelENbrD', {
    expand: ['product'],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount! / 100),
  };

  return {
    props: {
      product,
    },
  };
};

export default Home;
