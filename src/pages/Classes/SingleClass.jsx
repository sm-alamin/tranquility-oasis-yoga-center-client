const SingleClass = ({ classItem }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative border">
      <img
        className="w-full h-auto"
        src={classItem.image}
        alt={classItem.class_name}
      />
      <div className="flex w-full justify-between bg-lime-100 p-2">
        <div className="flex flex-col h-20">
          <h2 className="text-lg font-semibold">{classItem.class_name}</h2>
          <p className="text-gray-500">{classItem.instructor_name}</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="flex flex-col h-20 "></div>
        <div className="absolute top-3 left-32 animate-pulse">
        <p className="text-black font-extrabold p-2 rounded-xl bg-slate-300">
          Available Seats: {classItem.available_seats}
        </p>
        
        </div>
        <div>
        <p className="text-gray-500">Price:$ {classItem.price}</p>
        <button className="btn-primary text-white rounded-lg p-2">
          Enroll Now
        </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        
      </div>
    </div>
  );
};

export default SingleClass;
