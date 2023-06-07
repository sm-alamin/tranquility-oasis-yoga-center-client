import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SingleInstructor from "./SingleInstructor";


const AllInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch("instructors.json")
          .then((res) => res.json())
          .then((data) => {
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

      <div className="grid grid-cols-3 gap-5">
        {instructors.map((instructor) => (
          <SingleInstructor key={instructor.id} instructor={instructor} />
        ))}
      </div>
      <div className="text-center pb-5">
      <button className="btn btn-secondary w-36">Show All Instructors</button>
      </div>
    </>
    );
};

export default AllInstructors;