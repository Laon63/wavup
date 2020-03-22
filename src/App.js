import React from "react";
import { Route } from "react-router-dom";
import Container from "./components/Container";
import Main from "./components/Main";
import { Provider } from "./contexts";
import Landing from "./components/Landing";

function App() {
  return (
    <Provider>
      <Route path="/wavup/" component={Landing} exact />
      <Route
        path="/wavup/:id"
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
