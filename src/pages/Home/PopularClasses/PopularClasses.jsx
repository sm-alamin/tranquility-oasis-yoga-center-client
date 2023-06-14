import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import SinglePopularCourse from "./SinglePopularCourse";


const PopularClasses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://tranquility-oasis-yoga-center-server.vercel.app/courses?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  return (
    <>
      <div>
        <SectionHeader
          heading="Our Popular Classes"
          tagline="Find Your Desired Class"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {courses.map((course) => (
          <SinglePopularCourse key={course._id} course={course} />
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
