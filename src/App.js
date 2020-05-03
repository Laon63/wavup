import React from "react";
import { Provider } from "./contexts";
import ChannelsSetter from "./components/ChannelsSetter";

function App() {
  return (
    <Provider>
      <ChannelsSetter></ChannelsSetter>
    </Provider>
  );
}

export default App;
