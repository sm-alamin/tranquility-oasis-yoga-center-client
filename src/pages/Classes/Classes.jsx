import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SingleClass from "./SingleClass";

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                console.log(data)
            });
    }, []);

    return (
        <div>
            <SectionHeader
                heading="Our Classes"
                tagline="Choose Your Level and Focus"
            />

           <div className="grid grid-cols-3 gap-3">
           {classes.map(classItem => (
                <SingleClass key={classItem._id} classItem={classItem} />
            ))}
           </div>
        </div>
    );
};

export default Classes;
