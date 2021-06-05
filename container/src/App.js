import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Progress from "./components/Progress";
import useNavigation from "./services/useNavigation";

const EsquemaFirmasLazy = lazy(() => import("./components/EsquemaFirmasApp"));
const history = createBrowserHistory({ basename: "/obe/" });

export default ({ pathname: nextPathname }) => {
  useNavigation(history, nextPathname);
  return (
    <Router history={history}>
      <Suspense fallback={<Progress />}>
        <ErrorBoundary>
          <Switch>
            <Route path="/esquema-firmas" component={EsquemaFirmasLazy} />
          </Switch>
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
};
