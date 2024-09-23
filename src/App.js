// import { useEffect } from "react";

import { Route, Router } from "react-router-dom";
import Sminex from "./pages/Sminex";

// const tg = window.Telegram.WebApp;

function App() {

  // useEffect(() => {
  //   tg.ready();
  // }, []);

  // const onClose = () => {
  //   tg.close();
  // };


  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Sminex} />
      </Router>
    </div>
  );
}

export default App;
