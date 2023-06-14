
import { useEffect } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import useAdmin from "../../hooks/useAdmin";
import useApprovedClasses from "../../hooks/useApprovedClasses";
import useInstructor from "../../hooks/useInstructor";
import SingleClass from "./SingleClass";
import { useQueryClient } from "@tanstack/react-query";

const Classes = () => {
    const [approvedCourses] = useApprovedClasses();
    const queryClient = useQueryClient();
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();
    useEffect(() => {
        // Invalidate queries related to admin and instructor when they change
        if (!isAdminLoading) {
          queryClient.invalidateQueries("isAdmin");
        }
        if (!isInstructorLoading) {
          queryClient.invalidateQueries("isInstructor");
        }
      }, [isAdminLoading, isInstructorLoading, queryClient]);
    
      if (isAdminLoading || isInstructorLoading) {
        // Handle loading state if necessary
        return <div>Loading...</div>;
      }

    return (
        <div>
            <SectionHeader
                heading="Our Classes"
                tagline="Choose Your Level and Focus"
            />

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 pb-10">
           {approvedCourses.map(classItem => (
                <SingleClass key={classItem._id} classItem={classItem} isInstructor ={isInstructor} isAdmin={isAdmin} />
            ))}
           </div>
        </div>
    );
};

export default Classes;
