import React from "react";
import "./HealthTopic.css";

function HealthTopic({ title, imgUrl }) {
  return (
    <div>
      <h1>Health Category</h1>
      <h3>{title}</h3>
      <img src={imgUrl} alt="" />
    </div>
  );
}

export default HealthTopic;
