import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const { data: courses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch("https://tranquility-oasis-yoga-center-server.vercel.app/courses");
      return res.json();
    },
  });

  return [courses, loading, refetch];
};

export default useClasses;
