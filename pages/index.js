import axios from "axios";
import Head from "next/head";
import Features from "../components/Features";
import Hero from "../components/Hero";
import ProductsList from "../components/ProductsList";
import Review from "../components/Review";
import Steps from "../components/Steps";
import styles from "../styles/Home.module.css";

export default function Home({ productList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cake</title>
        <meta name="description" content="best foods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <ProductsList productList={productList} />
      <Steps />
      <Review />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
    },
  };
};
