import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "../components/form/Form";
import { FormSection } from "../components/form/FormSection";
import { Input } from "../components/form/Input";
import { FormSubmit } from "../components/form/FormSubmit";
import { toast } from "sonner";

const Registration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Registering");

    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const response = await fetch("https://gizmo-eight.vercel.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register");
      }

      toast.success("User Registered Successfully", { id: toastId });
      navigate(`/login`);
    } catch (error) {
      toast.error(error.message || "Something went wrong", { id: toastId });
    }
  };

  return (
    <div className="flex flex-col  justify-center items-center max-w-md mx-auto h-screen px-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center mb-5">Register</h1>
        <FormSection>
          <Input
            type="text"
            id="name"
            label="Name"
            register={register("name")}
            errors={errors}
            placeholder="Your name"
          />
          <Input
            type="text"
            id="email"
            label="Email"
            register={register("email")}
            errors={errors}
            placeholder="Your email"
          />
          <Input
            type="password"
            id="password"
            label="Password"
            register={register("password")}
            errors={errors}
            placeholder="Your password"
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </div>
  );
};

export default Registration;
