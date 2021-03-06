import React, { useContext } from "react";
import styled from "styled-components";
import context from "../contexts";
import CategoryList from "../components/category/CategoryList";
import media from "../utils/media";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 2;
  border-radius: 0.5rem;
  background-color: black;
  font-family: "Baloo Bhai", cursive;
  margin-left: 2px;
  margin-top: 2px;
  overflow: hidden;

  ${media.mobile`
    flex: 3;
  `}
`;

function Category() {
  const { category } = useContext(context);
  return (<Wrapper style={{ display: category.toggleCategory ? "flex" : "none" }}>
    <CategoryList></CategoryList>
  </Wrapper>);
}

export default Category;
