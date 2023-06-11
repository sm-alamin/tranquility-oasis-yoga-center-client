import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useClasses from "../../../../hooks/useClasses";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import { Link } from "react-router-dom";

const AllClasses = () => {
  const [classes, , refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();

  return (
    <div className="w-full">
      <SectionHeader
        heading="Manage All Items"
        tagline="Do not panic,you can update your classes"
      />
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Photo</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Total Enrolled Students</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((class_item, index) => (
              <tr key={class_item._id}>
                <td>{index + 1}</td>

                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={class_item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>

                <td className="">{class_item.class_name}</td>
                <td className="text-center">${class_item.price}</td>
                <td className="text-center">
                  {class_item.number_of_enrolled_students}
                </td>
                <td>
                  <button className="btn btn-warning btn-xs">Pending</button>
                </td>
                <td>
                  <Link
                    to={`/dashboard/update-classes/${class_item._id}`}
                    className="btn btn-ghost w-16 bg-green-300  text-white"
                  >
                    <FaEdit />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClasses;
