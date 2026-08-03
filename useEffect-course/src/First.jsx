import {  useState, useEffect}from "react";

export default function First() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

     useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("component Re-rendered!")
     }, [ count])
     
  return (
    <div>
          <h2>count : {count}</h2>
          <button onClick={() => setCount(count + 1) }>Increment</button>

         </div>
  )
}

