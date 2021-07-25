import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/router";

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}
export default App;
