import { Slide } from "react-awesome-reveal";
const SinglePopularInstructor = ({ instructor }) => {
  return (
    <Slide className="">
      <div className="flex flex-col justify-center items-center">
        <img
          src={instructor.instructor_photo}
          alt={instructor.instructor_name}
          className="w-52 h-52 rounded-full object-cover hover:scale-105"
          style={{transition: 'all .5s ease'}}
        />
        <div className="">
          <div className="flex flex-col justify-center items-center">
          <span className="px-2 py-1 text-black text-2xl rounded-full">
            {instructor.instructor_name}
          </span>
          <span className="px-2 py-1 text-green-300 rounded-full text-xs">
            {instructor.yoga_type}
          </span>
          </div>
        </div>
      </div>
    </Slide>
    
  );
};

export default SinglePopularInstructor;
