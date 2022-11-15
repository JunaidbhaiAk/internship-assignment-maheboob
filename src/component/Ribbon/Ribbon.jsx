import React from "react";
import { ribbonPath } from "../../utils/constants";
import "./ribbon.css";
const Ribbon = ({ show,setShow }) => {
  return (
    <div className="ribbon">
      {ribbonPath.map((ele) => genrateSpan({ path: ele, show,setShow }))}
    </div>
  );
};

const genrateSpan = ({ path, show,setShow }) => {
  const style = { opacity: show ? "1" : "0", transition: "0.5s all" };
  if (path === " > Friends Referred")
    return (
      <span className="ribbon__text" style={style} key={path} onClick={()=> setShow(!show)}>
        {path}
      </span>
    );
  return (
    <span className="ribbon__text" key={path}>
      {path}
    </span>
  );
};

export default Ribbon;
