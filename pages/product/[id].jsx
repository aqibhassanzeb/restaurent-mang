import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <div className="min-w-screen min-h-[80vh]  flex items-center p-3 overflow-hidden relative ">
      <div className="w-full max-w-5xl rounded border border-gray-300 bg-primary shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <Image
                src={product.img}
                className="w-full relative z-10"
                alt=""
                width={300}
                height={300}
              />
              <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-8">
              <h1 className="font-bold uppercase text-2xl mb-5">
                {product.title}
              </h1>
              <p className="text-sm">{product.desc} </p>
            </div>
            <div>
              <div className="mr-3 mb-4">
                <label htmlFor="quantity">Quantity: </label>
                <input
                  className="border rounded-md outline-none w-20 h-10  ml-3 font-bold text-center"
                  type="number"
                  name="quantity"
                  id="quantity"
                  defaultValue={1}
                  onChange={e => setQuantity(e.target.value)}
                />
              </div>
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline">$ </span>
                <span className="font-bold text-5xl leading-none align-baseline">
                  {product.price}
                </span>
              </div>
              <div className="inline-block align-bottom">
                <button
                  className="btn group cursor-pointer"
                  onClick={handleClick}
                >
                  <span className="btn-span">
                    <i className="bi bi-cart -ml-2 mr-2 "></i> Add to Cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};

export default Product;
