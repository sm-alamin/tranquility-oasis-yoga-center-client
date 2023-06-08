import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SingleInstructor from "./SingleInstructor";


const AllInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/instructors")
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
          <SingleInstructor key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </>
    );
};

export default AllInstructors;