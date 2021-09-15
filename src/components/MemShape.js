import React from "react";
import "./styles/MemShape.css";

export default function MemShape(props) {
  const { id, name, like, dislike, img, favouriteMem } = props.mem;

  return (
    <section>
      <h1>
        <span className="name">
          <i class="fas fa-angle-double-left"></i> {name}{" "}
          <i class="fas fa-angle-double-right"></i>
        </span>
      </h1>
      <img src={img} alt={name}></img>
      <main>
        <div className="vote-panel">
          <div className="vote">
            <button className="btn-vote" onClick={() => props.likesCount(id)}>
              <span className="green">
                <i class="fas fa-arrow-alt-circle-up"></i>
              </span>
            </button>
            <span className="counter">
              {like} <i class="fas fa-balance-scale"></i> {dislike}{" "}
              {favouriteMem}
            </span>
            <button
              className="btn-vote"
              onClick={() => props.dislikesCount(id)}
            >
              <span className="red">
                <i class="fas fa-arrow-alt-circle-down"></i>
              </span>
            </button>
          </div>
          <button className="star" onClick={() => props.favouriteMem(id)}>
            <span>
              <i class="far fa-star"></i>
            </span>
          </button>
        </div>
      </main>
    </section>
  );
}
