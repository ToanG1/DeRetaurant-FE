import React from "react";
import style from "./Homepage.scss";

function Homepage() {
  const myName = "Toan";

  return (
    <div className="homepage-home">
      this is homepage of {myName}
      {[1, 2, 3].map((i) => {
        return <span>{i} </span>;
      })}
      <div className="header">
        this is header
        <h1 id="header-name">title</h1>
      </div>
      <div className="body">
        this is body
        <h1 id="header-name">title in body</h1>
      </div>
      <div className="footer">this is footer</div>
    </div>
  );
}

export default Homepage;
