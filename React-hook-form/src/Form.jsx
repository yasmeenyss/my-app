import { DevTool } from '@hookform/devtools';
import { useForm} from "react-hook-form"

function Form() {
   const {
  register,
  handleSubmit,
  control,
  formState: { errors }
} = useForm();

     const onSubmit = (data) => {
       console.log("DATA:", data);
  };

    console.log("ERRORS:", errors);


    return (
        <div>

       <form onSubmit={handleSubmit(onSubmit)}>

        <label >Name</label>

        <input 
        type="text"
         id="name" 
         {...register("name", {
            required: "Name is required",

        })}
        />

        {errors.name && (
  <div>
    <p>Type: {errors.name.type}</p>
    <p>Message: {errors.name.message}</p>
  </div>
)}
        <br/><br/>

       
        <label htmlFor='email'>Email</label>
        <input
         type='text'
          id='email' 
          {...register("email")}
          />

        <br/><br/>

        <label htmlFor='age'>Age</label>
        <input
         type='text' id='age'
           {...register("age")}
           />
        <br/><br/>
        <button type='submit'>Submit</button>

    </form>

     <DevTool control={control} placement="top-left" />

    </div>
  )
}

export default Form
