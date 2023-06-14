import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Custom Login
  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="login-container">
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <div className="inputbox">
            <ion-icon name="mail-outline" />
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
            />
            <label htmlFor="email">Email</label>
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline" />
            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
            />
            <label htmlFor="password">Password</label>
            {errors.password && <span>This field is required</span>}
          </div>
          <div className="forget">
            <label htmlFor="checkbox">
              <input type="checkbox" />
              Remember Me <a href="#">Forget Password</a>
            </label>
          </div>
          <button type="submit" className="btn btn-secondary">
            Log in
          </button>
          <SocialLogin />
          <div className="register">
            <p>
              Don't have an account <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
