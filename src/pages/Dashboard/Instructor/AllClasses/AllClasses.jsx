import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useClasses from "../../../../hooks/useClasses";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";


const AllClasses = () => {
    const [classes, , refetch] = useClasses();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = class_item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/courses/${class_item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    const handleUpdateClass = (class_item) => {
        console.log(class_item)
    }

    return (
        <div className="w-full">
            <SectionHeader heading="Manage All Items" tagline="Do not panic,you can update your classes" />
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Info</th>
                            <th>Price</th>
                            <th>Total Enrolled Students</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((class_item, index) => <tr key={class_item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={class_item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{class_item.class_name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">${class_item.price}</td>
                                <td className="text-center">{class_item.number_of_enrolled_students}</td>
                                <td>
                                    <button className="btn btn-warning btn-xs">Pending</button>
                                </td>
                                <td>
                                    <button onClick={() => handleUpdateClass(class_item)} className="btn btn-ghost w-16 bg-green-300  text-white"><FaEdit /></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(class_item)} className="btn btn-ghost w-16 bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllClasses;