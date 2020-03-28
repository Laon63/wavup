import React from "react";
import styled from "styled-components";

import Display from "./Display";
import Category from "./Category";
import media from "../utils/media";

const Wrapper = styled.div`
  /* float: left; */
  display: flex;
  background: #fff;
  width: 100%;
  height: 100%;

  ${media.mobile`
    flex-direction: column;
  `}
`;

function Contents() {
  return (
    <Wrapper>
      <Display></Display>
      <Category></Category>
    </Wrapper>
  );
}

export default Contents;
