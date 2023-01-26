"use client"  // Client side rendering
import { useState } from "react";
import Message from "./Message";

export default function memoTest(){
    // count state
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [counter, setCounter] = useState(0);
    
    // if props is updated  then render this Component
    console.log("Count is Rendering: " + counter);
    
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>

        <Message messageCount={counter}/>
      </div>
       );

}