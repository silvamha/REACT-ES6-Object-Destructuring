// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import {
  hondaModel,
  hondaTopColour,
  hondaTopSpeed,
  teslaModel,
  teslaTopColour,
  teslaTopSpeed,
} from "./practice";

ReactDOM.render(

  <tbody>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{teslaModel}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{hondaModel}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
  </tbody>,
  document.getElementById("root")
);
