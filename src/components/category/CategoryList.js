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
  width: 100%;
  height: 97%;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  height: 100%;
`;

const Li = styled.li`
  list-style: none;
  display: flex;
  margin: 0;
  height: 5.2em;

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
  padding: 10px 5px 0 5px;
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-family: "hanna", cursive;
  font-size: 0.9em;
  line-height: 1.5em;
  height: 4.3em;  
`;

function CategoryList() {
  const { category, video, dispatch } = useContext(context);
  const playListInfo = category.playListInfo;
  const currentVideoIndex = video.currentVideo;

  const CLICK_LIST = (index) => {
    dispatch.video({ type: "SELECT", currentVideo: index });
  }

  return (<Wrapper>
    <Ul>
      {
        (playListInfo || []).map((item, i)=>{
          const thumbnailURL = item.thumbnails ? item.thumbnails.default.url : "";
          return (
            <Li key={i} style={{ background: i === currentVideoIndex ? LIST_SELECTED_COLOR : ""}} onClick={CLICK_LIST.bind(null, i)}>
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
