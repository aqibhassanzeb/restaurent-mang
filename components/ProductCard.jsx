import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product._id}`}>
        <Image
          src={product.img}
          alt=""
          width="500"
          height="500"
          className="h-48 w-48"
        />
      </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>$ {product.price}</span>
      <Link
       href='#'
      //  href={`/product/${product._id}`}
      >
        <div className="group mt-2 [transform:translateZ(0)] px-10 py-1 rounded-lg bg-btn_clr overflow-hidden relative before:absolute before:bg-red-600 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500">
          <span className="relative z-0 font-medium text-black group-hover:text-white transition ease-in-out duration-500">
            Order
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
