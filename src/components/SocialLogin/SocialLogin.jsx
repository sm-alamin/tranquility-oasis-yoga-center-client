
import { useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://tranquility-oasis-yoga-center-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="flex justify-center items-center mt-6">
            <p className="text-gray-600 text-center">
              <button onClick={handleGoogleLogin} className="btn btn-circle">
                <div className="">
                <BsGoogle />
                </div>
              </button>
            </p>
          </div>
        </div>
    );
};

export default SocialLogin;