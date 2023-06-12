const SinglePopularCourse = ({ course }) => {
  const { _id, course_name, course_photo,instructor_name, number_of_enrolled_students } = course;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-custom">
      <img
        src={`https://source.unsplash.com/featured/?${course_photo}`}
        alt="Course Photo"
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course_name}</div>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-indigo-600">Instructor:</span> {instructor_name}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-indigo-600">Enrolled Students:</span> {number_of_enrolled_students}
        </p>
      </div>
    </div>
  );
};

export default SinglePopularCourse;
