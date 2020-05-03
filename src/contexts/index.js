import React, { createContext, useReducer } from "react";
import { widgetList } from "../utils/consts";
import { shuffle } from "../utils/utils";

const Context = createContext();

const Provider = ({ children }) => {
  const channelsReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state.concat(action.channels);
      case "SET_PLAYLIST":
        const channel = state.find((x) => x.id === action.channelId);
        channel.playList = action.playList;
        return state;
      default:
        return state;
    }
  };

  const initialChannales = [
    {
      id: "myList",
      name: "#MY SOUND",
      title: "MY",
      tags: ["나만의 목록", "좋아요"],
      img: "/images/mysound.png",
      playList: (localStorage.myList && JSON.parse(localStorage.myList)) || [],
      initialMessages: ["내가 좋아하는 소리들"],
      category: ["favorite"],
    },
  ];
  const [channels, channelsDispatch] = useReducer(
    channelsReducer,
    initialChannales
  );

  const widgetReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE":
        try {
          const userSetting = JSON.parse(localStorage[action.name] || "{}");
          localStorage.setItem(
            action.name,
            JSON.stringify({
              ...userSetting,
              use: !state[action.name],
            })
          );
        } catch (e) {}

        return {
          ...state,
          [action.name]: !state[action.name],
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
          player: action.player,
        };
      case "NEXT":
        return {
          ...state,
          currentVideo:
            (state.currentVideo + 1 + action.playList.length) %
            action.playList.length,
        };
      case "PREV":
        return {
          ...state,
          currentVideo:
            (state.currentVideo - 1 + action.playList.length) %
            action.playList.length,
        };
      case "SELECT":
        return {
          ...state,
          currentVideo: action.currentVideo,
        };
      case "CLEAR":
        return { ...state, player: null, currentVideo: 0 };
      case "ADD_MYLIST":
        if (state.myList.some((x) => x.id === action.video.id)) {
          return state;
        }

        const addList = [...state.myList, action.video];
        localStorage.setItem("myList", JSON.stringify(addList));
        channelsDispatch({
          type: "SET_PLAYLIST",
          channelId: "myList",
          playList: addList,
        });
        return {
          ...state,
          myList: addList,
        };
      case "REMOVE_MYLIST":
        if (!state.myList.some((x) => x.id === action.video.id)) {
          return state;
        }

        const removeList = state.myList.filter((x) => x.id !== action.video.id);
        localStorage.setItem("myList", JSON.stringify(removeList));
        channelsDispatch({
          type: "SET_PLAYLIST",
          channelId: "myList",
          playList: removeList,
        });
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
        const channel = channels.find((x) => x.id === action.id);
        if (channel) {
          channel.playList = shuffle(channel.playList);
        }
        return channel;
      case "CLEAR":
        return null;
      default:
        return state;
    }
  };

  const categoryReducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return {
          ...state,
          toggleCategory: true,
        };
      case "HIDE":
        return {
          ...state,
          toggleCategory: false,
        };
      case "TOGGLE":
        return {
          ...state,
          toggleCategory: !state.toggleCategory,
        };
      default:
        return state;
    }
  };

  //위젯 초기화
  let initialWidget = {};
  widgetList.forEach((item) => {
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
    myList: (localStorage.myList && JSON.parse(localStorage.myList)) || [],
  };

  const [widget, widetDispatch] = useReducer(widgetReducer, initialWidget);
  const [video, videoDispatch] = useReducer(videoReducer, initialVideo);
  const [channel, channelDispatch] = useReducer(channelReducer, null);
  const [category, categoryDispatch] = useReducer(categoryReducer, {
    toggleCategory: false,
  });

  const value = {
    widget,
    video,
    channels,
    channel,
    category,
    dispatch: {
      widget: widetDispatch,
      video: videoDispatch,
      channels: channelsDispatch,
      channel: channelDispatch,
      category: categoryDispatch,
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const Consumer = Context.Consumer;

export { Provider, Consumer };

export default Context;
