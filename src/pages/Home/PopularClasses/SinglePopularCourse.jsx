import { Slide } from "react-awesome-reveal";
const SinglePopularCourse = ({ course }) => {
  const { _id, course_name, image,instructor_name, total_enrolled_student } = course;
  return (
    <Slide><div className="max-w-sm rounded overflow-hidden shadow-lg bg-custom">
    <img
      src={image}
      alt="Course Photo"
      className="w-full h-48 object-cover"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{course_name}</div>
      <p className="text-gray-700 text-base">
        <span className="font-bold text-indigo-600">Instructor:</span> {instructor_name}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-bold text-indigo-600">Enrolled Students:</span> {total_enrolled_student}
      </p>
    </div>
  </div></Slide>
  );
};

export default SinglePopularCourse;
