import React from "react";
import Dog from "./images/anotherDog.jpg";
import cat from "./images/cat.jpg";
import dog2 from "./images/dog2.jpg";
import "./css/photos.css";

function Photos() {
  return (
    <div className="container-fluid Photos">
      <div className="row">
        <div className="col">
          <img src={cat} alt="cat" />
        </div>
        <div className="col">
          <img src={dog2} alt="small dog" />
        </div>
        <div className="col">
          <img src={Dog} alt="large dog" />
        </div>
      </div>
    </div>
  );
}

export default Photos;
