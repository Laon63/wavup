import React from "react";
import { Route } from "react-router-dom";
import Container from "./components/Container";
import Main from "./components/Main";
import { Provider } from "./contexts";
import Landing from "./components/Landing";
import { URL_ROUTER_NAME } from "./utils/consts";

function App() {
  return (
    <Provider>
      <Route path={URL_ROUTER_NAME + "/"} component={Landing} exact />
      <Route
        path={URL_ROUTER_NAME + "/:id"}
        render={() => (
          <Container>
            <Main></Main>
          </Container>
        )}
      />
    </Provider>
  );
}

export default App;
