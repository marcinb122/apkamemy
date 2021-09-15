import React from "react";
import MemShape from "./MemShape";
import "./styles/MemShape.css";

const NormalRoute = (props) => {
  const normalAll = props.memArray.map((mem) => (
    <MemShape
      key={mem.id}
      mem={mem}
      likesCount={props.likesCount}
      dislikesCount={props.dislikesCount}
      favouriteMem={props.favouriteMem}
    />
  ));

  return <React.Fragment>{normalAll}</React.Fragment>;
};

export default NormalRoute;
