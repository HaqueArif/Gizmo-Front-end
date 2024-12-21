import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FormSection } from "../components/form/FormSection";
import { Input } from "../components/form/Input";
import { FormSubmit } from "../components/form/FormSubmit";
import { Form } from "../components/form/Form";
import { useForm } from "react-hook-form";
import { verifyToken } from "../utils/verifyToken";
// import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Logging in");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to log in");
      }

      const res = await response.json();
      const user = verifyToken(res.token);

      // Store token in localStorage or cookies
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Logged in successfully", { id: toastId, duration: 2000 });
      navigate(`/`);
    } catch (error) {
      toast.error(error.message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex flex-col  justify-center items-center max-w-md mx-auto h-screen px-5 ">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center mb-5">Login</h1>
        <FormSection>
          <Input
            type="text"
            id="email"
            label="Email"
            register={register("email")}
            errors={errors}
            placeholder="Your Email"
          />
          <Input
            type="password"
            id="password"
            label="Password"
            register={register("password")}
            errors={errors}
            placeholder="Your Password"
          />
        </FormSection>
        <NavLink
          className="mt-2 block hover:underline hover:text-blue-700"
          to="/register"
        >
          Create new account?
        </NavLink>
        <FormSubmit />
      </Form>
    </div>
  );
};

export default Login;
