import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaCalendarAlt,
  FaHome,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import {
  SiGoogleclassroom
} from "react-icons/si";

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
        <ul className="menu p-4 w-80 space-y-2">
          {/* changeable menu according to the role */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home" className="border-b-2">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-classes"  className="border-b-2">
                  <SiGoogleclassroom></SiGoogleclassroom> Manage Classes
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/dashboard/all-users"  className="border-b-2">
                  <FaUsers></FaUsers> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <>
                <li>
                  <NavLink to="/dashboard/home"  className="border-b-2">
                    <FaHome /> Instructor Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-class"  className="border-b-2">
                    <FaBook /> Add a Class
                  </NavLink>
                </li>
               
                <li>
                  <NavLink to="/dashboard/all-classes"  className="border-b-2">
                    <FaCalendarAlt /> My Classes
                  </NavLink>
                </li>
               
              </>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home"  className="border-b-2">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-enrolled-classes"  className="border-b-2">
                  <FaCalendarAlt></FaCalendarAlt> My Enrolled Classes
                  <span className="badge inl badge-secondary">
                    +{paymentCart?.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history"  className="border-b-2">
                  <SiGoogleclassroom></SiGoogleclassroom> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-cart"  className="border-b-2">
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
            <NavLink to="/"  className="border-b-2">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/classes"  className="border-b-2"><SiGoogleclassroom></SiGoogleclassroom> Our Classes</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;