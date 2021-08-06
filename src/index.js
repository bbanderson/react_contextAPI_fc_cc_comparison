import { StrictMode } from "react";
import ReactDOM from "react-dom";
import FruitContext from "./contexts/FruitContext";

import App from "./App";

const fruits = [
  { id: 0, name: "apple" },
  { id: 1, name: "banana" },
  { id: 2, name: "citrus" }
];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <FruitContext.Provider value={fruits}>
      <App />
    </FruitContext.Provider>
  </StrictMode>,
  rootElement
);
