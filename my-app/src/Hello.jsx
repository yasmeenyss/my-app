function Hello({name= "Guest", age= 18, city= "unknown", hobbies = []}){

    return  (
      <>
      <h2>Hello, {name}</h2>
      <p>Age : {age}</p>
      <p>city : {city}</p>
      <ul>
        {hobbies.map((hobby,index)=>(
           <li  key={index}>{hobby}</li>
        
        ))}
      </ul>
      </>
    )
}

export default Hello