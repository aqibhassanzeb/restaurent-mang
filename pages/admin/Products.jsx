import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";

const Products = ({ products }) => {
  const [productsList, setProductsList] = useState(products);
  const handleDelete = async id => {
    console.log(id);
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
      );
      setProductsList(productsList.filter(pizza => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="antialiased text-gray-600 h-screen px-4">
      <div className="flex flex-col justify-center mt-10">
        <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Products List</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Image</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Product ID</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Title</div>
                    </th>
                    <th className="px-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Price</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Action</div>
                    </th>
                  </tr>
                </thead>
                {productsList.map(product => (
                  <tbody
                    key={product._id}
                    className="text-sm divide-y divide-gray-100"
                  >
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <Image
                          src={product.img}
                          width={50}
                          height={50}
                          alt=""
                          className="pt-5"
                        />
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{product._id}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{product.title}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">$ {product.price}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <button onClick={() => handleDelete(product._id)}>
                          <i className="bi bi-trash bg-red-200 p-2 ml-20 rounded-md"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async ctx => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      products: productRes.data,
    },
  };
};

export default Products;
