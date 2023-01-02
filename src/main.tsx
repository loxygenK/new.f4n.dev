/* @refresh reload */
import { render } from "solid-js/web";
import { Router, useRoutes } from "@solidjs/router";
import routes from "~solid-pages";

import "ress";

import "~/styles/base.scss";

render(() => {
  const Routes = useRoutes(routes);
  return (
    <Router>
      <Routes />
    </Router>
  );
}, document.getElementById("root") as HTMLElement);
