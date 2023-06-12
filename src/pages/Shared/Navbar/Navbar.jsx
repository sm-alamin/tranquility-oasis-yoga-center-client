import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { MdOutlineShoppingBasket } from "react-icons/md";
import './Navbar.css'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err.message);
      });
  };
  const navItems = (
    <>
      <li className="hover:border-b-2 hover:pb-1">
        <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Home</NavLink>
      </li>

      <li className="hover:border-b-2 hover:pb-1">
        <NavLink to="/instructors" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Instructors</NavLink>
      </li>
      <li className="hover:border-b-2 hover:pb-1">
        <NavLink to="/classes" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Classes</NavLink>
      </li>
      <li className="hover:border-b-2 hover:pb-1">
        <NavLink to="/about-us" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-custom-navbar">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case hidden sm:block mt-3">
          <span className="text-custom text-xs lg:text-xl">Tranquility Oasis</span> <span className="text-custom text-xs lg:text-xl">Yoga Center</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  space-x-3 h-14">{navItems}</ul>
      </div>

      <div className="navbar-end z-10">
        <Link to="/dashboard/my-cart" className="mr-3">
          <button className="btn gap-2 bg-custom">
            <MdOutlineShoppingBasket />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>

        {!user ? (
          <Link to="/login" className="btn">
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user.displayName}
            >
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL}
                  alt="User Avatar"
                />
              </div>
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="">Settings</Link>
              </li>
              <li>
                <Link onClick={handleLogOut}>Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Navbar;
