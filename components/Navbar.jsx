import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const { quantity } = useSelector(state => state.cart);
  return (
    <div className="h-20 px-12 shadow flex items-center  justify-between  top-0 bg-primary z-200">
      <div className={styles.item}>
        <Image src="/img/logo.png" alt="logo" width={140} height={110} />
      </div>
      <div>
        <ul className="flex items-center justify-center font-medium">
          <Link href="/" passHref>
            <li className="m-5">Home</li>
          </Link>
          <Link href="/foods" passHref>
            <li className="m-5">Foods</li>
          </Link>
          <Link href="/cart" passHref>
            <li className="m-5">Cart</li>
          </Link>
          <li className="m-5">Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className="relative">
          <i className="bi bi-cart2 text-2xl"></i>
          <span className="ml-3 w-5 h-5 flex items-center justify-center absolute -right-2 -top-3 text-white font-bold bg-red-500 rounded-full p-0.5">
            {quantity}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
