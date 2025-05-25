import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-1/2 h-fit bg-slate-300 rounded-md p-6 shadow-lg flex items-center justify-center">
      <form>
        <h6>Login</h6>
        <input
          type="text"
          name="username"
          className="w-full px-4 py-3 rounded-md border"
          placeholder="Enter your username"
        />
        <input
          type="password"
          name="password"
          className="w-full px-4 py-3 rounded-md border"
          placeholder="Enter your password"
        />
        <button className="w-full px-4 py-3 rounded-md bg-blue-300">
          Login
        </button>
      </form>
      <button
        onClick={() => {
          navigate("/auth/signup");
        }}
      >
        Don't have an account? Sign Up
      </button>
    </div>
  );
};

export default Login;
