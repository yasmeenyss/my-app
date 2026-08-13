import { useState } from 'react';

function WithoutUseMemo() {

    const [count, setCount] = useState(0);
   

    function expensiveCalculation(num)  {
        console.log("Running expensiveCalculation...");


        
        for(let i = 0; i < 1000000000; i++) {
            
        }

        return num * 2;
    }

    const result = expensiveCalculation(count);

    return (
        <div>
           <h2>Count: {count}</h2>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
        </div>
        
    )

}
export default WithoutUseMemo;