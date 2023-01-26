import { useState } from "react";
import Component2 from "./Component2";
import React from "react";

const Component1 = () => {
  const UserContext = React.createContext({
      id: 1,
      name: "user",
  });
  const [user, setUser] = useState({
    id:101,name:"Saiful Islam"
  });
  console.log("Hello",user);

  return (
      <Component2 />
  );
}
export default Component1;