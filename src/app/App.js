import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";

import { Home } from "../pages/Home";

// Lazy-loaded components
const Resume = lazy(() => import("../pages/ResumePage").then(module => ({ default: module.ResumePage})));
const PageNotFound = lazy(() => import("../pages/PageNotFound").then(module => ({ default: module.PageNotFound })));
const Works = lazy(() => import("../pages/ProjectsPage").then(module => ({ default: module.ProjectsPage })));



export const App = () => {

    return (
      <ThemeProvider>
        <CssBaseline />
        <Router>
          <HelmetMeta />
          {/* Wrap lazy-loaded routes with Suspense */}
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Works} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    );
};
