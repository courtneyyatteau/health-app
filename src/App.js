import "./App.css";
import React, { useEffect, useState } from "react";
import HealthTopic from "./HealthTopic";

function App() {
  const url = "https://health.gov/myhealthfinder/api/v3/";
  const exampleRequest = `${url}topicsearch.json?TopicId=527`;

  const [healthTopic, setHealthTopic] = useState();
  const [healthImage, setHealthImage] = useState();
  const [healthTopics, setHealthTopics] = useState();

  useEffect(() => {
    getHealthInfo();
  });

  const getHealthInfo = async () => {
    const response = await fetch(exampleRequest);
    const data = await response.json();
    //console.log(data.Result.Resources.Resource[0].Sections.section);
    //console.log(data.Result.Resources.Resource[0]);
    setHealthTopic(data.Result.Resources.Resource[0].Title);
    setHealthImage(data.Result.Resources.Resource[0].ImageUrl);
    setHealthTopics(data.Result.Resources.Resource[0].Sections.section);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div>
        <HealthTopic title={healthTopic} imgUrl={healthImage} />
      </div>
      <div>
        {healthTopics.map((topic) => (
          <div key={topic.Title}>{topic.Title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
