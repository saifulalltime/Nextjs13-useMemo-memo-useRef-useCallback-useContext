import { memo, useMemo } from "react";

const Message = ({messageCount,onHandleIncrement}:any) => {
    
    console.log("messageCount",messageCount);
    
    const caluateNumber = useMemo(() => {
        let number = 0;
        for (let index = 0; index < 5000000000; index++) {
            number += 1;
        }
        return number; 
    }, [])

    return(
        <div>
            <br />
            <h1>The Message Is : {caluateNumber}</h1>
            <br />
            <h1>The Message Is : {messageCount}</h1>
            <button onClick={onHandleIncrement}>Increment Message Number</button>
        </div>
    )
    
}
export default memo(Message);
