import React, { useContext } from "react";
import styled from "styled-components";
import context from "../../contexts";

const LIST_HOVER_COLOR = "#e2e6ff"; 
const LIST_SELECTED_COLOR = "#bfc9ff";

const Wrapper = styled.div`
  border-radius: 0.5rem;
  background-color: white;
  font-family: "Baloo Bhai", fantasy;
  margin: 5px;
  overflow: auto;
  height: 97%;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  /* overflow: auto; */
  /* max-height: 400px; */
  height: 100%;
`;

const Li = styled.li`
  list-style: none;
  display: flex;
  margin: 0;

  /* background-image: linear-gradient(to right, rgba(255,255,255,0) 50%, #ddd 50%);
  background-size: 200% auto;
  background-position: -0% 0;
  transition: background-position 0.5s ease-out; */

  &:hover {
    cursor: pointer;
    background: ${LIST_HOVER_COLOR};
    /* background-position: -99.99% 0; */
  }
`;

const Image = styled.img`
  flex: 1;
  padding: 5px;
`;

const Span = styled.span`
  flex: 9;
  padding: 5px;
`;

const CLICK_LIST = () => {
  alert("test")
}

function CategoryList() {
  const { category, video } = useContext(context);
  const playListInfo = category.playListInfo;
  const currentVideoIndex = video.currentVideo;

  return (<Wrapper>
    <Ul>
      {
        (playListInfo || []).map((item, i)=>{
          const thumbnailURL = item.thumbnails ? item.thumbnails.default.url : "";
          return (
            <Li key={i} style={{ background: i === currentVideoIndex ? LIST_SELECTED_COLOR : ""}} onClick={CLICK_LIST}>
              <Image src={thumbnailURL} alt="Error" />
              <Span>{item.title}</Span>
            </Li>
          )
        })
      }
    </Ul>
  </Wrapper>);
}

export default CategoryList;
