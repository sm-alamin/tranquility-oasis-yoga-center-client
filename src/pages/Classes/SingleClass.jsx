import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const SingleClass = ({ classItem }) => {
  const { class_name, instructor_name, available_seats, image, price, _id } =
    classItem;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (classItem) => {
    console.log(classItem);
    if (user && user.email) {
      const cartItem = {
        classItemId: _id,
        class_name,
        instructor_name,
        available_seats,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            toast.success('successfully added in your cart')
          }
        });
    } else {
      Swal.fire({
        title: "Please login to enroll the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative border">
      <img className="w-full h-auto" src={image} alt={class_name} />
      <div className="flex w-full justify-between bg-lime-100 p-2">
        <div className="flex flex-col h-20">
          <h2 className="text-lg font-semibold">{class_name}</h2>
          <p className="text-gray-500">{instructor_name}</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="flex flex-col h-20 "></div>
        <div className="absolute top-3 left-32 animate-pulse">
          <p className="text-black font-extrabold p-2 rounded-xl bg-slate-300">
            Available Seats: {available_seats}
          </p>
        </div>
        <div>
          <p className="text-gray-500">Price:$ {price}</p>
          <button
            onClick={() => handleAddToCart(classItem)}
            className="btn-primary text-white rounded-lg p-2"
          >
            Enroll Now
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between"></div>
    </div>
  );
};

export default SingleClass;
