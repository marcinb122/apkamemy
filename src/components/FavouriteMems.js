import React from "react";
import MemShape from "./MemShape";
import "./styles/MemShape.css";
import "./styles/Error404.css";

const Favourite = (props) => {
  const HotMemes = props.memArray.filter((mem) => mem.favourite === true);

  const favouriteAll = HotMemes.map((mem) => (
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
        <span className="errorpage">Nie masz jeszcze ulubionego mema?!</span>
      </div>
    );
  } else {
    return <React.Fragment>{favouriteAll}</React.Fragment>;
  }
};

export default Favourite;
