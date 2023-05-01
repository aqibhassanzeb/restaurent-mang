import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { reset } from "../redux/cartSlice";
import { useRouter } from "next/router";
import Checkout from "../components/Checkout";
import { useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [cash, setCash] = useState(false);
  const router = useRouter();

  const createOrder = async data => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      console.log(res);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.products.map(product => (
                  <tr key={product._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <Image
                            src={product.img}
                            alt="product_image"
                            width={100}
                            height={100}
                            className="w-full h-full rounded-full"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {product.title}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
                      <p className="text-gray-900 whitespace-no-wrap">
                        $ {product.price}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {product.quantity}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">
                          $ {product.price * product.quantity}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>
            {cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$ 0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>
            {cart.total}
          </div>
          <div onClick={() => setCash(true)} className="btn group mt-8">
            <span className="btn-span cursor-pointer">CHECKOUT NOW!</span>
          </div>
        </div>
      </div>
      {cash && <Checkout total={cart.total} createOrder={createOrder} />}
    </div>
  );
};

export default Cart;
