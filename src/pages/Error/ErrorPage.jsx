
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5">
      <img
        src="https://cdn.dribbble.com/users/721524/screenshots/5518447/media/30b921aecd20792912bb176dbd827312.gif"
        alt="Error"
        className="max-w-full max-h-full"
      />
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 border p-5 bg-custom">
        <div className="max-w-md text-center relative">
          <p className="font-bold text-3xl pt-5">Looks like we lost our way.</p>
          <h2 className="mb-8 font-extrabold text-9xl text-primary">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-3xl font-extrabold md:text-3xl mb-8 text-red-700">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-bold rounded bg-custom text-black absolute -top-12 left-1/3"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
