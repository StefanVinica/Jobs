import DashboardRoute from "./routes/DashboardRoute"
import Homepage from "./routes/Homepage"
import AboutUs from "./routes/AboutUs"
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route
              path={'/jobs'}
              component={DashboardRoute}
              render={routeProps => <DashboardRoute {...routeProps} />}
      />
      <Route
              exact
              path={'/'}
              component={Homepage}
              render={routeProps => <Homepage {...routeProps} />}
      />
      <Route
              path={'/aboutus'}
              component={AboutUs}
              render={routeProps => <AboutUs {...routeProps} />}
      />
    </Switch>
  );
}

export default App;
