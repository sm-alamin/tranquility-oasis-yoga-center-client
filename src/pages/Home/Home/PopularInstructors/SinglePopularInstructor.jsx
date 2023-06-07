const SinglePopularInstructor = ({ instructor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={instructor.instructor_photo}
          alt={instructor.instructor_name}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 bg-indigo-500 text-white rounded-full">
            {instructor.yoga_type}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{instructor.instructor_name}</h3>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <p className="text-gray-500">{instructor.total_students} enrolled</p>
        </div>
      </div>
    </div>
    
  );
};

export default SinglePopularInstructor;
