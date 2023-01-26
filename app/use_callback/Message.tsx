import { memo, useMemo } from "react";

const Message = ({messageCount,onHandleIncrement}:any) => {
    
    console.log("messageCount  === ",messageCount);

    return(
        <div>
            <br />
            <br />
            <h1>The Message Is : {messageCount}</h1>
            <button onClick={onHandleIncrement}>Increment Message Number</button>
        </div>
    )
    
}
export default memo(Message);
