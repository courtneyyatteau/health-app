import React from "react";
import "./HealthTopic.css";

function HealthTopic({ title, imgUrl }) {
  return (
    <div className="topic">
      <h3>{title}</h3>
      <img src={imgUrl} alt="" />
    </div>
  );
}

export default HealthTopic;
