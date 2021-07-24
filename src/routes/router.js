import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import TmdbHomePage from "../pages/TmdbHomePage";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/simple-card">
        <MainPage />
      </Route>
      <Route path="/TMDB">
        <TmdbHomePage />
      </Route>
      <Route exact path="*">
        <div>
          <h1>Coming Soon</h1>
        </div>
      </Route>
    </Switch>
  );
};

export default Routers;
