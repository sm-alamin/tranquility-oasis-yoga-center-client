

const StudentDashboard = () => {
  return (
    <div className="flex h-screen bg-white">
      <div className="flex-none w-64 px-6 py-8 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <nav className="mt-8">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block py-2 px-4 rounded transition duration-200 hover:bg-blue-400">My Selected Classes</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded transition duration-200 hover:bg-blue-400">My Enrolled Classes</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <h2 className="text-2xl font-bold mb-4">My Selected Classes</h2>

        {/* Selected Classes */}
        <div className="space-y-4">
          {/* Class Item */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-bold">Class Name</h3>
            <p>Instructor Name</p>
            <p>Price: $20</p>
            <div className="flex space-x-4 mt-4">
              <button className="btn btn-red">Delete</button>
              <button className="btn btn-blue">Pay</button>
            </div>
          </div>

          {/* Class Item */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-bold">Class Name</h3>
            <p>Instructor Name</p>
            <p>Price: $20</p>
            <div className="flex space-x-4 mt-4">
              <button className="btn btn-red">Delete</button>
              <button className="btn btn-blue">Pay</button>
            </div>
          </div>

          {/* Add more class items */}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
