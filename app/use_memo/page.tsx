"use client"  // Client side rendering
import { useState } from "react";
import Message from "./Message";

export default function useMemoTest(){
    // count state
    const [count, setCount] = useState(0);

    // if props is updated  then render this Component
    console.log("Count is Rendering: " + count);

    const onHandleIncrementMessage = () => {
      setCount(count + 1);
    };

    
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <Message messageCount={count} onHandleIncrement={onHandleIncrementMessage}/>
      </div>
       );

}