import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import SingleCourse from "./SingleCourse";

const PopularClasses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
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

      <div className="grid grid-cols-3 gap-3">
        {courses.map((course) => (
          <SingleCourse key={course.id} course={course} />
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
