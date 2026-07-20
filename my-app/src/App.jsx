
import Hello from "./Hello"
import Bye from "./Bye"

function App() {

  const isLoggedIn  =  true;

  if(isLoggedIn){

 

  return <Hello />
    }else{
      return <Bye/>
    }


}

export default App