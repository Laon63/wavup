import React, { useEffect, useContext, useRef, useState } from "react";
import styled from "styled-components";
import media from "../utils/media";
import context from "../contexts";

import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";
import { withRouter } from "react-router-dom";

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  max-width: 1000px;
  max-height: 600px;
  display: flex;
  flex-direction: column;

  ${media.mobile`
    width: 100%;
    flex-direction: column;
    padding-top: 0;
    max-height: max-content;
  `}
`;

function Main({ match }) {
  const { channel, channels, dispatch } = useContext(context);
  const [isOnceInitChannel, setIsOnceInitChannel] = useState(false);
  const ref = useRef({
    channel: Object.assign({}, channel),
  });

  function isValidChannel(channel) {
    return channel && channel.playList && channel.playList.length;
  }

  useEffect(() => {
    dispatch.channel({ type: "SET", id: match.params.id });
    dispatch.category({ type: "HIDE" });

    if (!isOnceInitChannel && isValidChannel(channel)) {
      setIsOnceInitChannel(true);
      ref.current.channel = Object.assign({}, channel);
    }

    return () => {
      dispatch.channel({ type: "CLEAR" });
    };
  }, [channel, channels]);

  if (!isValidChannel(ref.current.channel)) {
    return null;
  }

  return (
    <Wrapper>
      <Header></Header>
      <Contents></Contents>
      {/* <Footer></Footer> */}
    </Wrapper>
  );
}

export default withRouter(Main);
