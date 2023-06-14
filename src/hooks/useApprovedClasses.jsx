import { useQuery } from "@tanstack/react-query";

const useApprovedClasses = () => {
  const { data: courses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/courses");
      return res.json();
    },
  });

  const approvedCourses = courses.filter((course) => course.status === "approved");

  return [approvedCourses, loading, refetch];
};

export default useApprovedClasses;