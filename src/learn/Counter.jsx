import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0)

    const increment = () =>{
        //Takes the CURRENT state to calculate NEXT state
        setCount(count +1);
    }

    //multiple update state
    function increment2(){
        //Takes the PENDING state to calculate NEXT state
        setCount(c => c+1)
        setCount(c => c+1)
    }

    const decrement = () =>{
        setCount(count +1);
    }
    const reset = () =>{
        setCount(0);
    }

    return(
        <div className="counter-container">
             <p className="count-display">{count}</p>
             <button className="counter-button" onClick={increment}>increment</button>
             <button className="counter-button" onClick={increment2}>increment double</button>
             <button className="counter-button" onClick={decrement}>Decrement</button>
             <button className="counter-button" onClick={reset}>reset</button>
             </div>
    )


}

export default Counter