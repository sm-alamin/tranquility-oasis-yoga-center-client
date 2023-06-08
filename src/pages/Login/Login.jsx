import { useContext } from "react";
import "./Login.css";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {BsGoogle} from 'react-icons/bs'
import { toast } from "react-hot-toast";
const Login = () => {
    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'



// Custom Login
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace:true})
        
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };

  //Google login
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("success")
        navigate(from, {replace:true})
      })
      .catch((error) => {
        toast.error(error.message)
      });
     
  };
  return (
    <div className="login-container">
      <section>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="inputbox">
            <ion-icon name="mail-outline" />
            <input type="email" name="email" required />
            <label htmlFor='email'>Email</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline" />
            <input type="password" name="password" required />
            <label htmlFor="password">Password</label>
          </div>
          <div className="forget">
            <label htmlFor="checkbox">
              <input type="checkbox" />
              Remember Me <a href="#">Forget Password</a>
            </label>
          </div>
          <button type="submit" className="btn btn-secondary">Log in</button>
          <div className="flex justify-center mt-6">
            <p className="text-gray-600">
              <button onClick={handleGoogleLogin} className="btn btn-circle">
                <div className="">
                <BsGoogle />
                </div>
              </button>
            </p>
          </div>
          <div className="register">
            <p>
              Don't have a account <Link to='/register'>Register</Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
