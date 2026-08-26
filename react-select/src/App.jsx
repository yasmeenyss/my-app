import Select from "react-select";
import { SingleValue } from "react-select/animated";


function App() {

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

const customStyles ={
  control: (base) => ({
    ...base ,
    borderColor : "red",
    borderWidth: "4px",
    padding: "5px",
  }),
  option:  (base) => ({
    ...base ,
    Color : "blue",
    backgroundColor: "pink",
    padding: "5px",
  }),

  SingleValue: (base) => ({
    ...base ,
    Color : "yellow",
    fontweight: "bold",
   
  }),

};

  return (
    <div style={{ width: "300px"}}>
      <Select 
      options={options}  
      placeholder="Select your fruit"
        isClearable
        // isDisabled={false}
        onChange={(selected) => console.log(selected)}
        defaultValue={options[3]}
        styles={customStyles}
      />
    </div>
  );
}

export default App;