import { memo } from "react";

const Message = ({messageCount}:any) => {
    
    console.log("messageCount",messageCount);

    return(
        <div>
            <h1>The Message Is : {messageCount}</h1>
        </div>
    )
    
}
export default memo(Message);
