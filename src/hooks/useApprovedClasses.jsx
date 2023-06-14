import { useQuery } from "@tanstack/react-query";

const useApprovedClasses = () => {
  const { data: courses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch("https://tranquility-oasis-yoga-center-server.vercel.app/courses");
      return res.json();
    },
  });

  const approvedCourses = courses.filter((course) => course.status === "approved");

  return [approvedCourses, loading, refetch];
};

export default useApprovedClasses;