import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import "./App.css";
import MapChart from "./MapChart";

import MyOffCanvas from './component/offCanvas'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

function App() {
  // Hooks for the tool tip
  const [content, setContent] = useState("");

  // Hooks for controlling show/hide of the OffCanvas
  const [showMyOffCanvas, setShowMyOffCanvas] = useState(false)
  function toggleShow() {
    setShowMyOffCanvas(!showMyOffCanvas)
  }

  // Hooks for passing data to OffCanvas
  const [locationData, setLocationData] = useState({ text: 'Learn Hooks' });
  function handleLocationData(data) {
    setLocationData(data)
    console.log(data)
  }

  return (
    <div class="myContainer">
      <Container>
        {showMyOffCanvas ? <MyOffCanvas toggleShow={toggleShow} data={locationData} /> : null}
        <h1>ACNH art location IRL</h1>
        <h3>click the red dots to view details</h3>
        <MapChart setTooltipContent={setContent} toggleShow={toggleShow} handleLocationData={handleLocationData} />
        <ReactTooltip
          class="myToolTip"
          multiline={true}
          html={true}
          backgroundColor="#fff563"
          textColor="#c48d3f"
          border={true}
          borderColor="white"
          type="info">
          {content}
        </ReactTooltip>
      </Container>
    </div>
  );
}

export default App;
