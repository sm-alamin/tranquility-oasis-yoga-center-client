import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SingleInstructor from "./SingleInstructor";


const AllInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/courses")
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setInstructors(data);
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">
        {instructors.map((instructor) => (
          <SingleInstructor key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </>
    );
};

export default AllInstructors;