
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Form() {
  const { register,handleSubmit,control,formState, } = useForm({
    defaultValues: {
      name: "yasmeen",
      email: "",
      age: 18,
      social: {
        facebook: "",
        twitter: ""
      }
    }
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log("ERRORS:", errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* NAME */}
        <label htmlFor="name">Name</label>

        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",

            validate: (value) => {
              if (value === "admin") {
                return "Admin name is not allowed";
              }

              return true;
            },
          })}
        />
        

        <p className="error">
          {errors.name?.message}
          </p>

        <br />
        <br />

        {/* EMAIL */}
        <label htmlFor="email">Email</label>

        <input
          type="text"
          id="email"
          {...register("email", {
            required: "Email is required",
          })}
        />

        <p className="error">
          {errors.email?.message}
          </p>

        <br />
        <br />

       
       {/* AGE */}
<label htmlFor="age">Age</label>

<input
  type="number"
  id="age"
  {...register("age", {
    required: "Age is required",
  })}
/>
        <p className="error">
          {errors.age?.message}
          </p>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <DevTool control={control} placement="top-left" />
    </div>
  );
}

export default Form;