import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault()
   console.log("Name: ", name)
   console.log("Email:", email)
  }

  return (
      <form onSubmit={handleSubmit}>
        <h3 style={{ color: "red"}}> YASMEEN APP</h3>
        <h2>React Form Example</h2>

        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <label>Email:</label>
        <input 
        type="email" 
        value={email}
        placeholder="Enter your name"
        onChange={(e) => setEmail(e.target.value)}

        />

        <br/>

        <button type="submit">Submit</button>
      </form>
    
  );
}

export default SimpleForm;