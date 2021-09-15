import React from "react";
import MemShape from "./MemShape";
import "./styles/MemShape.css";
import "./styles/Error404.css";

const Hot = (props) => {
  const HotMemes = props.memArray.filter((mem) => mem.like + mem.dislike > 5);

  const hotAll = HotMemes.map((mem) => (
    <MemShape
      key={mem.id}
      mem={mem}
      likesCount={props.likesCount}
      dislikesCount={props.dislikesCount}
      favouriteMem={props.favouriteMem}
    />
  ));
  if (HotMemes.length < 1) {
    return (
      <div>
        <span className="errorpage">Polajkuj mema to coś tu wpadnie</span>
      </div>
    );
  } else {
    return <React.Fragment>{hotAll}</React.Fragment>;
  }
};

export default Hot;
