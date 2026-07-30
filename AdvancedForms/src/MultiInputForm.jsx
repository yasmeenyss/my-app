import { useState } from "react";

function MultiInputForm() {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
})


 const handleSubmit = (e) => {
    e.preventDefault()
   console.log(formData)

 }

 const handlechange =(e) => {
    const { name,value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value

    }))
 }



    return (
        <form onSubmit={handleSubmit}>
            <h2>Multiple Input Form</h2>

            <input name="name" 
            type="text" 
             placeholder="Name"
             value={formData.name}
             onChange={handlechange}
             />
            <br />
            <input 
             name="email"
              type="email"  
              placeholder="Email"
              value={formData.email}
              onChange={handlechange}

              />
            <br />


            <input 
            name="age" 
            type="text" 
             placeholder="Age"
             value={formData.age}
             onChange={handlechange}

            
             />
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default MultiInputForm