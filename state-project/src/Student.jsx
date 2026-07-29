import { useState }from 'react'


function Student() {
    const [student, setstudent] = useState({
        name: "john ",
        grade: "A",
        city: "Delhi"
    })
    const changeCity = () => {
        setstudent({...student, city: "Mumbai"});
    };

    
  return (
    <div>
        <h2>Name : {student.name}</h2>
        <p>Grade : {student.grade}</p>
        <p>city : {student.city}</p>
        
   
    <button onClick={changeCity}>Change City</button>
 

 
    </div>

  )
}

export default Student;