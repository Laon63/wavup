import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import Container from "./Container";
import Main from "./Main";
import Landing from "./Landing";
import context from "../contexts";
import { URL_ROUTER_NAME, API_URL } from "./../utils/consts";
import axios from "axios";

function ChannelsSetter() {
  const { dispatch } = useContext(context);

  //채널 목록 조회
  useEffect(() => {
    if (!localStorage.v || !localStorage.channels) {
      localStorage.removeItem("v");
      localStorage.removeItem("channel");
    }

    axios
      .get(API_URL.getChannels, { params: { v: localStorage.v } })
      .then((res) => {
        if (res.data) {
          localStorage.setItem("v", res.data.v);
          localStorage.setItem("channels", JSON.stringify(res.data.channels));
          dispatch.channels({ channels: res.data.channels, type: "INIT" });
          return;
        }

        dispatch.channels({
          channels: JSON.parse(localStorage.channels),
          type: "INIT",
        });
      });
  }, []);

  return (
    <>
      <Route path={URL_ROUTER_NAME + "/"} component={Landing} exact />
      <Route
        path={URL_ROUTER_NAME + "/:id"}
        render={() => (
          <Container>
            <Main></Main>
          </Container>
        )}
      />
    </>
  );
}

export default React.memo(ChannelsSetter);
