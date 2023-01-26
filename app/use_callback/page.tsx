"use client"  // Client side rendering
import { useCallback, useState } from "react";
import Message from "./Message";

export default function useMemoTest(){
    // count state
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    // if props is updated  then render this Component
    console.log("Count is Rendering: " + count);

    const onHandleIncrementMessage = useCallback(() => {
      setCount(count + 1);
    },[count]);

    
    return (
      <div>
        {toggle ? 'on':'off'}
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <Message messageCount={count} onHandleIncrement={onHandleIncrementMessage}/>
      </div>
       );

}