import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";

const Orders = ({ orders }) => {
  const [orderList, setOrderList] = useState(orders);
  const status = ["", "preparing", "on the way", "delivered"];

  const handleStatus = async id => {
    const item = orderList.filter(order => order._id === id)[0];
    const currentStatus = item.status;
    if (currentStatus > 3) return;
    try {
      const res = await axios.put("http://localhost:3000/api/orders/" + id, {
        status: currentStatus + 1,
      });
      setOrderList([res.data, ...orderList.filter(order => order._id !== id)]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="antialiased text-gray-600 h-screen px-4">
      <div className="flex flex-col justify-center mt-10">
        <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Orders List</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">ID</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Customer</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Time</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Address</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Contact</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Items</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Total</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Status</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Action</div>
                    </th>
                  </tr>
                </thead>
                {orderList.map(order => (
                  <tbody
                    key={order._id}
                    className="text-sm divide-y divide-gray-100"
                  >
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">
                          {order._id}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{order.customer}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{order.createdAt}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{order.address}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{order.contact}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">
                          {order.items.map((item, index) => (
                            <p key={index}>
                              <span className="font-bold mr-1">
                                {item.quantity}
                              </span>
                              {item.title}
                            </p>
                          ))}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          ${order.total}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{status[order.status]}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">
                          <button
                            onClick={() => handleStatus(order._id)}
                            disabled={order.status >= 3}
                            className="bg-blue-300 font-bold  text-sm p-1 rounded-md  "
                          >
                            Next Step
                          </button>
                        </div>
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

  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
    },
  };
};

export default Orders;
