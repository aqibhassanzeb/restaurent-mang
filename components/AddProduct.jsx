import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const AddProduct = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [price, setPrice] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      setLoading(true);
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dnx1zukwv/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        price,
        img: url,
      };
      await axios.post("http://localhost:3000/api/products", newProduct);
      setLoading(false);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1 className="text-center text-lg font-bold mb-2">
          Add a new Product
        </h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input
            className="file:border-none file:hover:cursor-pointer"
            type="file"
            onChange={e => setFile(e.target.files[0])}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            rows={4}
            type="text"
            onChange={e => setDesc(e.target.value)}
            className="border border-gray-400 outline-none pl-2"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Price</label>
          <input
            className={`${styles.input} ${styles.inputSm}`}
            type="number"
            onChange={e => setPrice(e.target.value)}
          />
        </div>

        <button
          className={`${styles.addButton} rounded-md`}
          onClick={handleCreate}
        >
          {loading ? "Loading" : "Create"}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
