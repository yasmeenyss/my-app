import {  useState, useEffect}from "react";

 function Timer() {

    const [seconds, setSeconds] = useState(0)
    

     useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev +1)
        }, 1000)

        return () => {
            clearInterval(interval)
            console.log("Timer Cleared.")
        }
        
     }, [])
     
  return (
    <div>
          <h2>seconds : {seconds}</h2>
          </div>
          
  )
}
export default Timer
