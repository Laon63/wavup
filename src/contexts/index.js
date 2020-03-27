import React, { createContext, useReducer } from "react";
import { widgetList, channels } from "../utils/consts";
import { shuffle } from "../utils/utils";

const Context = createContext();

const widgetReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      try {
        const userSetting = JSON.parse(localStorage[action.name] || "{}");
        localStorage.setItem(
          action.name,
          JSON.stringify({
            ...userSetting,
            use: !state[action.name]
          })
        );
      } catch (e) {}

      return {
        ...state,
        [action.name]: !state[action.name]
      };
    default:
      return state;
  }
};

const videoReducer = (state, action) => {
  switch (action.type) {
    case "SETPLAYER":
      return {
        ...state,
        player: action.player
      };
    case "NEXT":
      return {
        ...state,
        currentVideo:
          (state.currentVideo + 1 + action.playList.length) %
          action.playList.length
      };
    case "PREV":
      return {
        ...state,
        currentVideo:
          (state.currentVideo - 1 + action.playList.length) %
          action.playList.length
      };
    case "SELECT":
      return {
        ...state,
        currentVideo: action.currentVideo
      };
    case "CLEAR":
      return { ...state, player: null, currentVideo: 0 };
    case "ADD_MYLIST":
      const addList = [...state.myList, action.videoId];
      localStorage.setItem("myList", JSON.stringify(addList));
      channels[0].playList = addList;
      return {
        ...state,
        myList: addList,
      };
    case "REMOVE_MYLIST":
      const removeList = state.myList.filter(x => x !== action.videoId);
      localStorage.setItem("myList", JSON.stringify(removeList));
      channels[0].playList = removeList;
      return {
        ...state,
        myList: removeList,
      };
    default:
      return state;
  }
};

const channelReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      const channel = channels.find(x => x.id === action.id);
      channel.playList = shuffle(channel.playList);
      return channel;
    case "CLEAR":
      return null;
    default:
      return state;
  }
};

const categoryReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        toggleCategory: !state.toggleCategory,
        playListInfo: action.playListInfo
      };
    case "HIDE":
      return null;
    default:
      return state;
  }
};

//위젯 초기화
let initialWidget = {};
widgetList.forEach(item => {
  try {
    if (localStorage[item]) {
      initialWidget[item] = JSON.parse(localStorage[item]).use;
    } else {
      initialWidget[item] = true;
    }
  } catch (e) {}
});

//비디오 초기화
const initialVideo = {
  currentVideo: 0,
  myList: (localStorage.myList && JSON.parse(localStorage.myList)) || []
};

//my리스트 목록
if (initialVideo.myList && initialVideo.myList.length > 0) {
  channels[0].playList = initialVideo.myList;
}

const Provider = ({ children }) => {
  const [widget, widetDispatch] = useReducer(widgetReducer, initialWidget);
  const [video, videoDispatch] = useReducer(videoReducer, initialVideo);
  const [channel, channelDispatch] = useReducer(channelReducer, null);
  const [category, categoryDispatch] = useReducer(categoryReducer, {
    toggleCategory: false,
    playListInfo: [
      {
        title: "1번영상"
      },
      {
        title: "2번영상"
      },
      {
        title: "3번영상"
      },
      {
        title: "4번영상"
      },
      {
        title: "5번영상"
      }
    ]
  });

  const value = {
    widget,
    video,
    channel,
    category,
    dispatch: {
      widget: widetDispatch,
      video: videoDispatch,
      channel: channelDispatch,
      category: categoryDispatch
    }
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const Consumer = Context.Consumer;

export { Provider, Consumer };

export default Context;
