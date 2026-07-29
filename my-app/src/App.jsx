
import Hello from "./Hello"
import Button from "./Button"


function App() {
  const hobbies = ["Reading", "coding ", "Traveling"];

  function Message() {
    alert("Hello from Message Box ")
  }

  function ByeMessage(){
    alert("Hello from Bye Message Box ");
  }

  return (
    <>
    <Hello name="Yasmeen" age={22} city="karnataka"  hobbies={hobbies}/>
    < Button label="Click Me" handleClick={Message}/>
    < Button label="Just Click" handleClick={ByeMessage}/>
     
    </>
  )

}

export default App 
