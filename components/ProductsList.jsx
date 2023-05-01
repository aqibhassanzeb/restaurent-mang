import Link from "next/link";
import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductsList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className="font-bold text-4xl text-yellow-900 mb-2">Popular Foods</h1>
      <p className="text-gray-500 text-xl mt-2 font-medium mb-2">
        Menu That Always Make You Fall In Love
      </p>
      <div className={styles.wrapper}>
        {productList.length > 0 && productList?.slice(0, 4).map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Link href="/#">
        <button
          type="button"
          className="inline-block px-6 w-40 mt-5 py-2 border-2 border-yellow-500 text-black font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          See More
        </button>
      </Link>
    </div>
  );
};

export default ProductsList;
