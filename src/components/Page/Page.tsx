import React from "react";

const Page: React.FC = props => {
  return <div className={"wrapper"}> {props.children} </div>;
};

export default Page;
