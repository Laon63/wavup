import React, { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 0.5rem;
  background-color: white;
  font-family: "Baloo Bhai", fantasy;
  text-align: center;
  margin: 5px;
`;

function CategoryTitle() {
  return (<Wrapper>
    <div>
      재생목록
    </div>
  </Wrapper>);
}

export default CategoryTitle;
