import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schema";

function Formm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input
        type="text"
        placeholder="Name"
        {...register("name")}
      />
      <p className="error">{errors.name?.message}</p>

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      <p className="error">{errors.email?.message}</p>

      <input
        type="password"
        placeholder="Confirm Password"
        {...register("Confirmpassword")}
      />
      <p className="error">{errors.confirmPassword?.message}</p>

       <input
        type="age"
        placeholder="Age"
        {...register("age")}
      />
      <p className="error">{errors.age?.message}</p>


      <button type="submit">Register</button>

    </form>
  );
}

export default Formm;