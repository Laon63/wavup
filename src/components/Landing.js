import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { URL_ROUTER_NAME } from "../utils/consts";
import Modal from "react-bootstrap/Modal";
import context from "../contexts";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
`;

const Header = styled.div`
  height: 35%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/images/listening.png") no-repeat;
  background-size: cover;
  background-position-y: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
`;

const Titles = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.div`
  font-size: 0.8rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: "Hind Siliguri", sans-serif;
  letter-spacing: 0.2rem;
`;

const Expander = styled.div`
  font-size: 0.8rem;
  justify-self: flex-end;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Contents = styled.div``;

const PlayList = styled.div`
  padding: 1rem 0;
  width: 100%;
  background-color: #f0f0f0;
  overflow: hidden;
`;

const CardWrapper = styled.div`
  float: left;
  width: 45%;
  height: 45%;
  max-width: 300px;
  max-height: 300px;
  margin: 0.5rem;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  padding-top: 84.4%;
  cursor: pointer;
`;

const CardInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 0.2rem 8px rgba(0, 0, 0, 0.06);
  transition: 0.2s linear;

  background-color: white;
  border-radius: 0.3rem;
  overflow: hidden;

  &:hover {
    margin-top: -0.2rem;
    box-shadow: 0 0.4rem 8px rgba(0, 0, 0, 0.06);
    margin-bottom: 0.2rem;
  }
`;

const ThumbNail = styled.div`
  width: 100%;
  height: 70%;
`;

const CardDesc = styled.div`
  width: 100%;
  height: 30%;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardName = styled.div`
  display: flex;
  align-items: center;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
  letter-spacing: 0.15rem;
  font-size: 0.8rem;
`;
const CardTags = styled.div`
  color: #aaa;
  font-size: 0.6rem;
`;
const Footer = styled.div`
  text-align: center;
  letter-spacing: 0.15rem;
  font-size: 0.8rem;
  background-color: #f0f0f0;
  padding: 5rem 3rem 3rem 3rem;
  color: #666666;
`;
const ModalHeader = styled.div`
  display: flex;
`;
const DeviceLink = styled.div`
  color: ${(props) => (props.isActive ? "#2196f3" : "#9e9e9e")};
  margin: 0 0.5rem;
  cursor: pointer;
`;
const MenuBar = styled.div`
  padding: 0 1rem;
  background-color: white;
  display: flex;
  flex-direction: row;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;

  & .menutitle {
    padding-top: 0.35rem;
    padding-bottom: 0.35rem;
    font-size: 0.8rem;
    font-weight: 500;
    font-family: "Hind Siliguri", sans-serif;
    letter-spacing: 0.1rem;
    cursor: pointer;

    color: ${(props) => (props.isActive ? "#00b423" : "#8e8e8e")};

    &:hover {
      color: #00b423;
    }
  }

  & .activebar {
    background-color: ${(props) => (props.isActive ? "#00b423" : "")};
    width: 100%;
    height: 0.2rem;
  }
`;
const Seperator = styled.hr`
  margin: 0;
`;
const MailTo = styled.a`
  text-decoration: none !important;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

const goChannel = (history, channel) => {
  if (!channel.playList || !channel.playList.length) {
    alert(`${channel.name}의 목록이 없습니다`);
    return;
  }
  history.push(`${URL_ROUTER_NAME}/${channel.id}`);
};

const Landing = ({ history }) => {
  const { channels } = useContext(context);
  const [modalShow, setModalShow] = useState(false);
  const [modalTab, setModalTab] = useState("Android");
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const handleAndroidShow = () => setModalTab("Android");
  const handleIOSShow = () => setModalTab("iOS");
  
  const [activeMenu, setActiveMenu] = useState("music");
  const handleMenuToggle = function (menu) {
    setActiveMenu(menu);
  };

  //메뉴 변경에 따른 목록 변경
  const [playList, setPlayList] = useState([]);
  useEffect(() => {
    if (activeMenu === "all") {
      setPlayList(channels);
    } else {
      setPlayList(
        channels.filter((x) => !x.category || x.category.includes(activeMenu))
      );
    }
  }, [activeMenu, channels]);

  return (
    <Wrapper>
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalHeader>
            <DeviceLink
              isActive={modalTab === "Android"}
              onClick={handleAndroidShow}
            >
              Android
            </DeviceLink>
            <DeviceLink isActive={modalTab === "iOS"} onClick={handleIOSShow}>
              iOS
            </DeviceLink>
          </ModalHeader>
        </Modal.Header>
        <Modal.Body>
          {modalTab === "Android" && (
            <div>
              <div>크롬(chrome) 브라우저</div>
              <br />
              <div>1. youtube.com 접속</div>
              <br />
              <img
                src={"/images/android1.png"}
                alt=""
                style={{ width: "100%", height: "100%" }}
              ></img>
              <br />
              <br />
              <br />
              <div>2. 아무 영상이나 들어간 후 점 세개 클릭</div>
              <br />
              <img
                src={"/images/android2.png"}
                alt=""
                style={{ width: "100%", height: "100%" }}
              ></img>
              <br />
              <br />
              <br />
              <div>3. 데스크톱 클릭</div>
              <br />
              <img
                src={"/images/android3.png"}
                alt=""
                style={{ width: "100%", height: "100%" }}
              ></img>
              <br />
              <br />
              <br />
              <div>4. 모두 닫고, wavup.me 접속</div>
              <br />
              <img
                src={"/images/android4.png"}
                alt=""
                style={{ width: "100%", height: "100%" }}
              ></img>
              <br />
              <br />
              <br />
              <div>5. 채널 선택 후, 영상 플레이</div>
              <br />
              <img
                src={"/images/android5.png"}
                alt=""
                style={{ width: "100%", height: "100%" }}
              ></img>
              <br />
              <br />
              <br />
              <div>
                6. 홈화면으로 가면 영상이 중지되고 상단 스피커 아이콘 표시
              </div>
              <br />
              <img
                src={"/images/android6.png"}
                alt=""
                style={{ width: "100%", height: "100%" }}
              ></img>
              <br />
              <br />
              <br />
              <div>
                7. 상단바를 내리면 중지된 영상이 나오며, 플레이 버튼 클릭
              </div>
              <br />
              <img
                src={"/images/android7.png"}
                alt=""
                style={{ width: "100%", height: "100%" }}
              ></img>
              <br />
              <br />
              <br />
              <div>8. 백그라운드 재생 성공! 마음껏 다른 작업을 하세요</div>
              <br />
            </div>
          )}
          {modalTab === "iOS" && <div>준비중...</div>}
        </Modal.Body>
      </Modal>

      <Header>
        <Titles>
          <SubTitle>음악과 함께 하고 싶을 땐</SubTitle>
          <Title>WAVUP</Title>
        </Titles>
        <Expander onClick={handleShow}>
          백그라운드에서 재생하는 방법
          <i className="material-icons">expand_more</i>
        </Expander>
      </Header>
      <Contents>
        <MenuBar>
          <Menu
            isActive={activeMenu === "all"}
            onClick={handleMenuToggle.bind(null, "all")}
          >
            <div className="menutitle">#ALL</div>
            <div className="activebar"></div>
          </Menu>
          <Menu
            isActive={activeMenu === "favorite"}
            onClick={handleMenuToggle.bind(null, "favorite")}
          >
            <div className="menutitle">#FAVORITE</div>
            <div className="activebar"></div>
          </Menu>
          <Menu
            isActive={activeMenu === "music"}
            onClick={handleMenuToggle.bind(null, "music")}
          >
            <div className="menutitle">#MUSIC</div>
            <div className="activebar"></div>
          </Menu>
        </MenuBar>

        <Seperator></Seperator>

        <PlayList>
          {playList.map((item) => (
            <CardWrapper key={item.id}>
              <Card onClick={() => goChannel(history, item)}>
                <CardInner>
                  <ThumbNail>
                    <img
                      src={item.img}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    ></img>
                  </ThumbNail>
                  <CardDesc>
                    <CardName>{item.name}</CardName>
                    <CardTags>{(item.tags || []).reduce((result, tag) => result + " #" + tag, "")}</CardTags>
                  </CardDesc>
                </CardInner>
              </Card>
            </CardWrapper>
          ))}
        </PlayList>
      </Contents>
      <Footer>
        developed by{" "}
        <span style={{ fontWeight: 600 }}>브로콜리, Wise Cow, 로봇</span>
        <br />
        <MailTo href="mailto:wavupme@gmail.com">
          <i className="material-icons" style={{margin: "0 0.5rem", fontSize: "1rem"}}>mail_outline</i>wavupme@gmail.com
        </MailTo>
      </Footer>
    </Wrapper>
  );
};

export default Landing;
