import "./App.css";
import React, { useEffect, useState } from "react";
import HealthTopic from "./HealthTopic";

function App() {
  const url = "https://health.gov/myhealthfinder/api/v3/topicsearch.json";
  const [healthTopics, setHealthTopics] = useState([]);

  useEffect(() => {
    getHealthInfo();
  });

  const getHealthInfo = async () => {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.Result.Resources.Resource);
    setHealthTopics(data.Result.Resources.Resource);
  };

  return (
    <div>
      <h1>Health Topics</h1>
      <div>
        {healthTopics.map((topic) => (
          <span className="topics" key={topic.Id}>
            <HealthTopic title={topic.Title} imgUrl={topic.ImageUrl} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
