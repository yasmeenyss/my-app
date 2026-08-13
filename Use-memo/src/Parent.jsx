import { useState, useMemo } from 'react'

function Parent() {
    const [count , setCount] = useState(0);

    const user = useMemo(
        ()=> ({name: "Yasmeen", age: 20}),
        []
    )

    console.log("Parent Rendered")

  return (
    <div>
      <h2>Parent Count : {count}</h2>

      <button onClick={()=> setCount(count + 1)}>
        Increase Count
        </button>

      <Child user={user}/>

    </div>
  )
}

function Child({ user }){
console.log("Child Rendered")
  console.log("User:", user);


return <h3>User : {user.name} </h3>
}

export default Parent;
