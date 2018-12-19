import React from "react";

const MyError = props => {
  if (!props.err) {
    throw new Error("Epic Fail!");
  } else {
    return <b style={{ color: "red" }}>{props.err}</b>;
  }
};

export default MyError;
