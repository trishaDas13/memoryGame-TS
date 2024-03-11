import React from "react";
import Router from "./router/Router";
import { ScoreContextProvider } from "./store/ContextAPI";


function App(): JSX.Element {
  return (
    <ScoreContextProvider>
      <div className="App">
        <Router />
      </div>
    </ScoreContextProvider>
  );
}

export default App;
