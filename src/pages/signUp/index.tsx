import image1 from "../../assets/image/phoe image.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const Index = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange", 
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    console.log("Form Data Submitted:", data);

    // Simulate a network request or API call
    setTimeout(() => {
      toast.success("Account created successfully!");
      reset();
      setIsLoading(false); 
    }, 2000); 
  };

  return (
    <div className="lg:flex items-center justify-center lg:min-h-screen">
      <img
        className="lg:h-screen lg:min-w-1 object-cover w-full"
        src={image1}
        alt="Descriptive Alt Text"
      />

      <div className="lg:w-1/3 p-6 rounded-md mx-6 sm:w-full mt-7">
        <h2 className="text-xl font-semibold mb-4">Create an account</h2>
        <p className="text-sm mb-4">Enter your details below</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username Field */}
          <div className="mb-4">
            <input
              type="text"
              id="username"
              className="w-full border-b border-gray-300 p-2 focus:outline-none bg-transparent"
              placeholder="Enter your username"
              {...register("username", {
                required: "Username is required", 
              })}
            />
            {errors.username && (
              <p className="text-sm text-red-500">{errors.username.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full border-b border-gray-300 p-2 focus:outline-none bg-transparent"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="w-full border-b border-gray-300 p-2 focus:outline-none bg-transparent"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white rounded-md p-2 mb-4"
            disabled={!isValid || isLoading} 
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>

      <ToastContainer position="top-right" autoClose={8000} />
    </div>
  );
};

export default Index;
