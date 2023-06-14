import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useEnrolledClasses from "../hooks/useEnrolledClasses";

const Dashboard = () => {
  const [cart] = useCart();
  const [paymentCart] = useEnrolledClasses(); 
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-custom">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {/* changeable menu according to the role */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-classes">
                  <FaWallet></FaWallet> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-booking">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users">
                  <FaUsers></FaUsers> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome /> Instructor Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-class">
                    <FaBook /> Add a Class
                  </NavLink>
                </li>
               
                <li>
                  <NavLink to="/dashboard/all-classes">
                    <FaCalendarAlt /> My Classes
                  </NavLink>
                </li>
                {/* Add more instructor-specific menu items */}
              </>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-enrolled-classes">
                  <FaCalendarAlt></FaCalendarAlt> My Enrolled Classes
                  <span className="badge inl badge-secondary">
                    +{paymentCart?.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-cart">
                  <FaShoppingCart></FaShoppingCart> My Selected Class
                  <span className="badge inl badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}
          {/* common for all role */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/classes"> Our Classes</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;