
import './App.css'

function Hello() {

   const isVisible = true;
   
   const visiblity = isVisible ? "visible" : "unvisible";


   return (
    <div>
        <h1 className={visiblity}>conditional rendering</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, beatae soluta ipsa dignissimos ut sapiente quis quisquam maxime debitis cupiditate amet id repellendus asperiores eaque, cum aspernatur ex tempore nostrum.</p>
        </div>
   )
//    if(isLoggedIn){
//    return <h1>Welcome user!</h1>
//    }else{
//       return <h2>Please login</h2>

//    }
   

}

export default Hello;