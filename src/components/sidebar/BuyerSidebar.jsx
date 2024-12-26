import { NavLink } from "react-router-dom";

const BuyerSidebar = () => {
  return (
    <ul className="flex flex-col">
      <li className="px-4 cursor-pointer bg-gray-500 text-gray-800 hover:bg-gray-700  hover:text-white">
        <NavLink className="py-3 flex items-center" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
            />
          </svg>
          Home
        </NavLink>
      </li>

      <li className=" hover:bg-gray-700">
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) =>
            `py-3 px-4 flex items-center ${
              isActive ? "bg-amber-600 text-white" : ""
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          My Cart
        </NavLink>
      </li>
      <li className=" hover:bg-gray-700">
        <NavLink
          to="/dashboard/wishlist"
          className={({ isActive }) =>
            `py-3 px-4 flex items-center ${
              isActive ? "bg-amber-600 text-white" : ""
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 3.75a3 3 0 1 1-4.5 4.5L12 9.25l-2.25-1.75a3 3 0 1 1-4.5-4.5C4.5 1.5 6 0 7.5 0c1.25 0 2.5.5 3.5 1.5C12 2.5 13 3.5 14 5c1-1.5 2.25-2.5 3.5-2.5 1.5 0 3 1.5 3 3 0 .75-.25 1.5-.75 2.25zM12 21.75s-7.5-4.5-7.5-8.25c0-3.75 2.25-5.25 4.5-5.25 1.5 0 3 1.5 3 1.5s1.5-1.5 3-1.5c2.25 0 4.5 1.5 4.5 5.25 0 3.75-7.5 8.25-7.5 8.25z"
            />
          </svg>
          Wishlist
        </NavLink>
      </li>

      <li className="px-4 py-2 mt-2 text-xs uppercase tracking-wider text-gray-500 font-bold">
        Apps
      </li>
      <li className="px-4 cursor-pointer hover:bg-gray-700">
        <a href="#" className="py-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
            />
          </svg>
          Messages
          <span className="ml-auto text-xs bg-gray-500 px-2 py-1 rounded-sm">
            16
          </span>
        </a>
      </li>
      <li className="px-4 cursor-pointer hover:bg-gray-700">
        <a href="#" className="py-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          Calendar
        </a>
      </li>
    </ul>
  );
};

export default BuyerSidebar;
