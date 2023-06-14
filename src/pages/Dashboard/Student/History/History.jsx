

import useEnrolledClasses from "../../../../hooks/useEnrolledClasses";

const History = () => {
 const [enrolledCart] = useEnrolledClasses();
  return (
    <div className="w-full">
      
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Photo</th>
              <th>Class Name</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.class_name}</td>
                <td>{item.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
