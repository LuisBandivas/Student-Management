import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="w-1/2 h-fit bg-slate-300 rounded-md p-6 shadow-lg flex items-center justify-center">
      <form>
        <h6>Signup</h6>
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
          Sign Up
        </button>
      </form>
      <button
        onClick={() => {
          navigate("/auth/login");
        }}
      >
        Already have an account? Login
      </button>
    </div>
  );
};

export default Signup;
