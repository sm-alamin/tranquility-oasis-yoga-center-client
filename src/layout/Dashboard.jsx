import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/my-enrolled-classes"><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/my-cart"><FaShoppingCart></FaShoppingCart> My Selected Classes
                            <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>

                    </li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/classes"> Our Classes</NavLink></li>
                </ul>

            </div>
</div>
    );
};

export default Dashboard;