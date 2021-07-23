import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Routers from "./routes/router";

function App() {
  return (
    // <Fragment>
    //   <MainPage />
    // </Fragment>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}
export default App;
