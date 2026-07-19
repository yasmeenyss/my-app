

function Hello() {

 const fruits = ["Apple", "Banana", "orange"];

 return (
        <div>
            <h2>Fruits List</h2>

            <ul>
                {fruits.map((fruit, index) => (
                    
                   <li key={index}> 
                    {index +1}  {fruit}
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default Hello;