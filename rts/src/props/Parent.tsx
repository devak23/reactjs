import { Child, ChildAsFC, ChildFC } from "./Child";
import { Fragment } from "react/jsx-runtime";

const Parent = () => {
  const handleOnClick = () => {
    console.log("clicked!");
  };

  return (
    <Fragment>
      <Child color="red" onClick={handleOnClick} />
      <ChildFC color="orange" onClick={handleOnClick} />
      <ChildAsFC color="green" onClick={handleOnClick} />
    </Fragment>
  );
};

export default Parent;
