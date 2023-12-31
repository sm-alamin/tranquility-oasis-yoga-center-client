import { useEffect, useState } from "react";
import SinglePopularInstructor from "./SinglePopularInstructor";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";


const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  useEffect(() => {
    fetch("https://tranquility-oasis-yoga-center-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        const sortedInstructors = data.sort((a, b) => b.total_enrolled_student - a.total_enrolled_student);
        setPopularInstructors(sortedInstructors);
      });
  }, []);
  return (
    <>
      <div>
        <SectionHeader
          heading="Our Instructors"
          tagline="Best Yoga Teachers are Here for You"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {popularInstructors.map((instructor) => (
          <SinglePopularInstructor key={instructor._id} instructor={instructor} />
        ))}
      </div>
      <div className="text-center pb-5">
      <Link to='/instructors' className="btn bg-custom text-indigo-600 hover:bg-indigo-600 hover:text-custom border-0 w-36">Show All Instructors</Link>
      </div>
    </>
  );
};

export default PopularInstructors;
