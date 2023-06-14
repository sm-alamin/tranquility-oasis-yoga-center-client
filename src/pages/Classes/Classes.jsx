import { useEffect } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import useApprovedClasses from "../../hooks/useApprovedClasses";
import SingleClass from "./SingleClass";
import { useQueryClient } from "@tanstack/react-query";

const Classes = () => {
  const [approvedCourses] = useApprovedClasses();
  const queryClient = useQueryClient();

  useEffect(() => {
    // Invalidate queries related to admin and instructor when they change
    queryClient.invalidateQueries("isAdmin");
    queryClient.invalidateQueries("isInstructor");
  }, [queryClient]);

  return (
    <div>
      <SectionHeader
        heading="Our Classes"
        tagline="Choose Your Level and Focus"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 pb-10">
        {approvedCourses.map((classItem) => (
          <SingleClass
            key={classItem._id}
            classItem={classItem}
            isInstructor={false}
            isAdmin={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Classes;
