import './App.css'


function Hello(){

    const getName = (yourname) => {

        return yourname;

    };

    function handleClick(){
        alert("Button was Clicked!");
    }
     const handleInput = (event) => {
        console.log("value : ",event.target.value)
     }

    const name = "YahuBaba";
    const name1 = "Yasmeen";

    const handleMouseOver = () => console.log("Mouse is over  the text!")
    const handleDoubleClick = () => console.log("Text is double clicked!")
    
    return(
<>
        <h1>Hello {getName(name)}</h1>
        <h2>Bye {getName(name1)}</h2>
        <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor</p>

        <button onClick={handleClick}>Click Me</button>

        <button onClick={()=> alert("Hello inline function!")}>
            Say Hello
            </button>
            <br />
            <input type="text" onChange={handleInput} placeholder="Type something" />
        
    </>
    );
}

export default Hello;