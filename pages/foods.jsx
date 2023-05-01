import styles from "../styles/ProductList.module.css";
import FoodCard from "../components/FoodCard";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Foods = ({ productList }) => {
  const [food, setFood] = useState(productList);
  const [search, setSearch] = useState([]);
  const handleChange = e => {
    const searchWord = e.target.value;
    const newFilter = food.filter(value => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setSearch([]);
    } else {
      setSearch(newFilter);
    }
  };
  return (
    <div className="p-6 flex flex-col ">
      <h1 className="font-bold text-3xl mb-2 text-center">All Foods</h1>
      <div className="border-b"></div>
      <div className="pt-2  relative text-gray-600 mb-10 mx-auto  mt-3">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="I'm looking for..."
          onChange={handleChange}
        />
        <button type="submit" className="absolute -top-1 left-64  mt-5 mr-4">
          <i className="bi bi-search"></i>
        </button>
        {search.length !== 0 && (
          <div className="mt-1 w-96 rounded-md border bg-white p-2 ">
            {search.slice(0, 5).map((product, key) => {
              return (
                <ul key={key} className="ml-3 ">
                  <li className="py-2 hover:rounded-md hover:bg-gray-300">
                    <Link href={`/product/${product._id}`} passHref>
                      <p className="ml-1">{product.title}</p>
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.wrapper}>
        {food?.map(product => (
          <FoodCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
    },
  };
};

export default Foods;
