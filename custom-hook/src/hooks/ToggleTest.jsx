import useToggle from "./useToggle";

function ToggleTest(){
    const [isOpen, toggleOpen] = useToggle()
     const [isTest, ToggleTest] = useToggle()



    return (
    
        <div>
            <div>
            <button onClick={toggleOpen}>Toggle </button>
            {isOpen && <p>Hello, this is visible!</p>}
        </div>
        <div>
            <button onClick={ToggleTest}>Toggle Test </button>
            {isTest && <p>Hello, this is Yasmeen!</p>}
         
              </div>
           </div>
    )

}

export default  ToggleTest;