import { StrictMode } from "react";
import ReactDOM from "react-dom";

import StarRating from "./StarRating";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StarRating />
  </StrictMode>,
  rootElement
);
