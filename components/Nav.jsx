import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Nav() {
  const { quantity } = useSelector(state => state.cart);
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-primary h-[80px] border-b">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between md:block">
            <Image src="/img/newlogo.png" alt="logo" width={140} height={100} className="rounded-lg" />
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black font-medium">
                <Link href="/">
                  <span className="hover:bg-btn_clr  px-4 py-2 rounded-md">
                    Home
                  </span>
                </Link>
              </li>
              <li className="text-black font-medium">
                <Link href="/#">
                  <span className="hover:bg-btn_clr  px-4 py-2 rounded-md">
                    Food
                  </span>
                </Link>
              </li>
              <li className="text-black font-medium">
                <Link href="/#">
                  <span className="hover:bg-btn_clr  px-4 py-2 rounded-md">
                    Cart
                  </span>
                </Link>
              </li>
              <li className="text-black font-medium">
                <Link href="/#">
                  <span className="hover:bg-btn_clr  px-4 py-2 rounded-md">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute sm:relative top-10 sm:top-0 right-20 sm:right-0 ">
          <Link href="/#" passHref>
            <div className="relative">
              <i className="bi bi-cart2 text-2xl"></i>
              <span className="ml-3 w-5 h-5 flex items-center justify-center absolute -right-2 -top-3 text-white font-bold bg-red-500 rounded-full p-0.5">
                {quantity}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
