import React from "react";
import greet from "../greet";
const CustomComponents = (props: React.ComponentProps<typeof greet>) => {
  return <div>{props.name}</div>;
};

export default CustomComponents;
