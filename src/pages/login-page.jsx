import { Link, useNavigate } from "react-router-dom";
import auth from "../utils/auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const admin = {
    username: "user",
    password: "user",
    token: "ASKGAS1212assg13j1351asfkhKQEP",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData);
    if (admin.username == username && admin.password == password) {
      const { token } = admin;
      auth.storeAuthCredential(token);
      return navigate("/Homepage");
    } else {
      alert("Username or Password is wrong ...");
      return navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-login bg-cover">
      <div className="backdrop-blur-sm bg-white/20 p-6 rounded-xl shadow-xl w-[300px] text-sm sm:mx-3">
        <h1 className="text-3xl font-semibold mb-4 text-center font-roboto">
          Log In
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="username"
              placeholder="user"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="passWord"
              name="password"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-green-200 hover:from-green-500 hover:to-yellow-500 text-white py-2 rounded-md ">
            Log In
          </button>
          <div className="my-4 text-center">
            <span>
              Dont have an account?
              <Link
                to="/register"
                className="text-primary-blue font-semibold hover:text-pink-400 hover:underline">
                {" "}
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
