import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Checkout.module.css";

const Checkout = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState(0);
  const { cart } = useSelector(state => state);

  const handleClick = () => {
    createOrder({
      customer,
      address,
      total,
      method: 0,
      contact,
      items: cart.products,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className="mb-5 text-xl">
          You will pay <span className="font-bold">${total}</span> after
          delivery.
        </h1>
        <div className={styles.item}>
          <label className="mb-2 font-medium">Name</label>
          <input
            placeholder="John Doe"
            type="text"
            className="h-10 border rounded-md pl-2 outline-none"
            onChange={e => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className="mb-2 font-medium">Contact No.</label>
          <input
            type="text"
            placeholder="+1 xxx xx xx"
            className="h-10 border rounded-md pl-2 outline-none"
            onChange={e => setContact(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className="mb-2 font-medium">Address</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text"
            className="border rounded-md pl-2"
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
