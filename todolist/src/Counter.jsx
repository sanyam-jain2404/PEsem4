import{useState} from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    function handleIncrement(){
        // setCount(count+1);
        //setCount(count++);
        setCount(count=>count+1); // using functional update to ensure correct state update
    }
    function handleDecrement(){
        if(count===0){
            alert("Count cannot be negative");
            return;
        }
        setCount(count-1);
    }
    return(
        <>
        <h1>Counter App</h1>
        <h3>Count={count}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        </>
    )
}