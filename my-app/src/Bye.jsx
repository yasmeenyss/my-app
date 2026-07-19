




function Bye(){
    const users = [
    { firstName:"Yasmeen", lastName: "M", age:22 },
    { firstName:"Yas", lastName: "M", age:82 },
    { firstName:"Yaseen", lastName: "M", age:92 }

    ]
     function fullName(user){
        return user.firstName + " "+ user.lastName;
     }

   return(

    <div>
        <h2>Person Details</h2>
        <ul>
        {users.map((user, index) => (
            <li>{fullName(user)} is {user.age} old</li>

       ))}
       </ul>
       
    </div>

   )
}

export default Bye;