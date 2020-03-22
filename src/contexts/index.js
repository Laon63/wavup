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
      } catch (e) { }

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
    case "CLEAR":
      return { currentVideo: 0 };
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


let initialWidget = {};
widgetList.forEach(item => {
  try {
    if (localStorage[item]) {
      initialWidget[item] = JSON.parse(localStorage[item]).use;
    } else {
      initialWidget[item] = true;
    }
  } catch (e) { }
});

const Provider = ({ children }) => {
  const [widget, widetDispatch] = useReducer(widgetReducer, initialWidget);
  const [video, videoDispatch] = useReducer(videoReducer, {
    currentVideo: 0
  });
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
