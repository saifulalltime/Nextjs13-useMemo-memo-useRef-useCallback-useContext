import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const Component4 = () => {
  const user = useContext(UserContext);
  console.log("Component 4",user);
    
  return (
    <div>
      <h1>{`ID -  ${user.id}!`}</h1>
      <h1>{`Name -  ${user.name}!`}</h1>
    </div>
  );
}
export default Component4;