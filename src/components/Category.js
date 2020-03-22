import React, { useContext } from "react";
import styled from "styled-components";
import context from "../contexts";
import CategoryTitle from "../components/category/CategoryTitle";
import CategoryList from "../components/category/CategoryList";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 2;
  border-radius: 0.5rem;
  background-color: black;
  font-family: "Baloo Bhai", cursive;
  margin-left: 2px;
`;

function Category() {
  const { category } = useContext(context);
  return (<Wrapper style={{ display: category.toggleCategory ? "block" : "none" }}>
    {/* <CategoryTitle></CategoryTitle> */}
    <CategoryList playListInfo={category.playListInfo}></CategoryList>
  </Wrapper>);
}

export default Category;
