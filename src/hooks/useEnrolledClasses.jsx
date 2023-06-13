import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useEnrolledClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enrolledCart = [] } = useQuery({
        queryKey: ['enrolledCarts', user?.email],
        enabled: !loading,
        
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            return res.data;
        },
    })

    return [enrolledCart, refetch]

}
export default useEnrolledClasses;