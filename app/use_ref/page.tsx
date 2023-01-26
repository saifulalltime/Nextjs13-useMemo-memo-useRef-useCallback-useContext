"use client"

import { useEffect, useRef, useState } from "react";

export default function useRefTestCase(){

    const nameRef = useRef<any>();
    const emailRef = useRef<any>();

    const clickHandler = (event:any) => {
        event.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    };
    
    return (
       <form onSubmit={clickHandler}>
            <div>
            <br />
                <label>Name</label>
                <input type="text" id="name" ref={nameRef} />
                <br />
                <br />
            </div>
            <div>
                <label>Email</label>
                <input type="text" ref={emailRef} /><br />
            </div>
            <br />
            <button type="submit">Submit</button>
       </form>
       );

}