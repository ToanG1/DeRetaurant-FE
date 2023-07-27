import React from "react";
import style from "./Homepage.scss";


function Homepage() {
  //const myName = "Toan";

  return (

    <div className="homepage-home">
        

      <div className="header">
      
        <h1 id="header-name">FoodDelightN&T</h1>
        <div class="sub-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-8">
          <div class="left-content">
            <p>Địa chỉ: 01 Võ Văn Ngân, Linh Chiểu, Thủ Đức, Thành phố Hồ Chí Minh</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4">
          <div class="right-icons">
            <ul>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

      </div>
      <div className="body">
        this is body
        <h1 id="header-name">title in body</h1>
        <h2> abe</h2>
      </div>
      <div className="footer">this is footer</div>
    </div>
  );
}

export default Homepage;
