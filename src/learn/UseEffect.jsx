import React, {useState, useEffect} from "react";

function UseEffect(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState();

    function addCount(){
        setCount(c => c+1)
    }

    function SubstractCount(){
        setCount(c => c-1)
    }

    function ChangeColor(){
        setColor(c => c === "green" ? "red": "green")
    }

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color])

    return(<>
        <p style={{color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={SubstractCount}>Subtract</button>
        <button onClick={ChangeColor}>Change Color</button>
    </>)
}

export default UseEffect