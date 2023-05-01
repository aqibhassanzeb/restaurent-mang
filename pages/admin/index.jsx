import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import AddButton from "../../components/AddButton";
import AddProduct from "../../components/AddProduct";

const Index = () => {
  const [close, setClose] = useState(true);

  return (
    <>
      <AddButton setClose={setClose} />
      {!close && <AddProduct setClose={setClose} />}
      <div className="flex flex-col items-center justify-center p-10 h-[50%] ">
        <Link href="/admin/products">
          <div className="btn group mb-10">
            <span className="btn-span">
              Products List <i className="bi bi-arrow-right"></i>
            </span>
          </div>
        </Link>
        <Link href="/admin/orders">
          <div className="btn group mb-10">
            <span className="btn-span">
              Orders List <i className="bi bi-arrow-right"></i>
            </span>
          </div>
        </Link>
      </div>
    </>
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

  return {
    props: {
      orders: null,
    },
  };
};

export default Index;
