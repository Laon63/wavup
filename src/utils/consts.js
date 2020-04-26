export const URL_ROUTER_NAME = "";

export const widgetList = ["chat", "clock", "playingTime"];

export const channels = [
  {
    id: "myList",
    name: "#MY SOUND",
    title: "MY",
    tags: "#나만의 목록 #좋아요",
    img: "/images/mysound.png",
    playList: [],
    initialMessages: ["내가 좋아하는 소리들"],
    category: ["favorite"],
  },
  {
    id: "study",
    name: "STUDY SOUND",
    title: "STUDY",
    tags: "#집중력 #편안한",
    img: "/images/studythumb.png",
    playList: [
      "s49CT4DTAkw",
      "8IXDbVK138w",
      "1xCfNv6mgWQ",
      "KxwR0kPX3bk",
      "Q-iEfzaikBI",
      "Y3GQUz4HL20",
      "Lp6XlsBm_Lw",
      "hcPXok-Pemg",
      "sVZIMTloWA8",
      "bQzIQa5YKvw",
      "mUeZDu9rBH8",
      "bTJP8RfaCJQ",
      "a_iQqN1Hp74"
    ],
    initialMessages: ["집중력을 높여주는 음악으로 최적의 환경을 만들어 보세요"],
    category: ["music"],
  },
  {
    id: "working",
    name: "노동요",
    title: "WORKING",
    tags: "#돈벌자 #능률상승",
    img: "/images/workingthumb.png",
    playList: [
      "TpPwI_Lo0YY",
      "UcnjZfxX5Ss",
      "UHxpi1OIW78",
      "5UlAbfn1Rmo",
      "GdO5z0PIy3I",
      "XdDrv-8ZfwY",
      "W0Iwx_dT_2Q",
      "Atp8GPADPDM",
      "n65JBcDUvW4",
      "74iHoCM83Mg",
      "qgl9ZsT3jKs",
      "4owW9hIbX0o",
      "myWn_g8lkXY",
      "3snaVY5y9Ok",
      "a89vNiNQRvA"
    ],
    initialMessages: [
      "당신의 노동력이 +10 증가하였습니다",
      "음악을 듣는 동안 피곤하지 않습니다"
    ],
    category: ["music"],
  },
  {
    id: "animation",
    name: "애니메이션OST",
    title: "ANIMATION",
    tags: "#지브리 #디즈니",
    img: "/images/zebri.png",
    playList: [
      "xNTIN58fAP8",
      "wPl0WgWmGao",
      "SpqjvCnnxlQ",
      "WuhKebgRg1w",
      "8CgI0UY6c-I",
      "nmAmNVQbmAE",
      "FK_t6p6C_GM",
      "ikKptNDWkHE",
      "jjn09s3Sh4o",
      "vHgGKcL_GwM",
      "9VPLBCmhCiE",
      "EVyS9UvXkT0"
    ],
    initialMessages: ["감미로운 애니메이션OST"],
    category: ["music"],
  },
  {
    id: "cheerup",
    name: "오늘 하루도 수고했어요",
    title: "CHEER UP",
    tags: "#위로 #격려",
    img: "/images/cheerup.png",
    playList: [
      "qdbyV3wVoLY",
      "9Idkwe0FXGQ",
      "Hl3jkH_ySDU",
      "he-akuoohRo",
      "vPs_TBGOA3E",
      "okoeQvOyjTQ",
      "_qmcg4vqmVg",
      "Q8DBnd41dSw",
      "k3xLviSTgYg",
      "8DnV9h-m66Q",
      "3nd640QULCw",
      "cOA2yaGY0GU",
      "ObKI_efcNdw",
      "tPTnvI8qXn4",
      "57x7Rlh-b74"
    ],
    initialMessages: ["오늘 하루도 수고했어요", "당신은 잘하고 있어요"],
    category: ["music"],
  },
  {
    id: "beforeworking",
    name: "월요병 극뽁! 신나는 출근길",
    title: "BEFORE WORKING",
    tags: "#돈버는기계로변신 #미쳐야산다",
    img: "/images/beforeworking.png",
    playList: [
      "OUJhceca_3c",
      "dvQpnd60NoQ",
      "QK9aAsuoajU",
      "Tc7Ulm6OhCk",
      "d8pzmY72ucc",
      "qHQ43hf7Eac",
      "1kYlqqW-x0w",
      "4YY3i3Q99xU",
      "tV6mNMTrJLo",
      "oEcJsHczaSE",
      "DKttw3WmMvE",
      "ZuWkYawlayI",
      "VLRaD9djoeE",
      "F9Ex1ESEWN4",
      "sTkp3_0_djc",
      "6cStzZy1kuU",
      "FvM0UPzzV1M",
    ],
    initialMessages: ["음악이라도 듣고 힘내봐요", "알아요..."],
    category: ["music"],
  },
  {
    id: "refreshing",
    name: "상쾌하게 기분전환",
    title: "REFRESHING",
    tags: "#시원한 #기분좋은",
    img: "/images/refreshing.png",
    playList: [
      "d8pzmY72ucc",
      "a_RWJiGy7Sg",
      "F9Ex1ESEWN4",
      "zrJPDBxk_HA",
      "nUCSfbhiJmw",
      "5EbvFoNY5Y0",
      "cYKEoE8gi88",
      "65nWuTpzh40",
      "OUJhceca_3c",
      "yni45ID2qCc",
      "GdO5z0PIy3I",
      "VLRaD9djoeE",
      "7nr4pe7oQ2E",
      "z9SuJviAOeA",
      "wKjvFRHitVw",
      "gkIxUlJ8bvs"
    ],
    initialMessages: ["기분전환되는 상쾌한 음악"],
    category: ["music"],
  },
  {
    id: "cafe",
    name: "CAFE SOUND",
    title: "CAFE",
    tags: "#커피 #재즈",
    img: "/images/cafe.png",
    playList: [
      "JHIkAEcQL7o",
      "mGYnJqEphZI",
      "0sHgjMAJTKI",
      "RX8wc7RCXqU",
      "MxWdsVMFm80",
      "r0CQYTOyiPQ",
      "j0QIxs9xNHk",
      "Y_vZmpxL_HY",
      "59KTewXmqys",
      "gybCBkUD9fI",
      "Z4qIrviyAZY",
      "rUP6CT5cYfs",
      "OPS19XCeGm0",
    ],
    initialMessages: ["향기로운 커피와 감미로운 음악"],
    category: ["music"],
  },
  {
    id: "drive",
    name: "운전할 때 음악은 필수",
    title: "DRIVE",
    tags: "#드라이브 #졸음운전 방지",
    img: "/images/drive.png",
    playList: [
      "tqISS-cG584",
      "Nw0pGAdOkX0",
      "LQagomFdJWI",
      "bc1bVOfm2IU",
      "w4kV3ZcpRQM",
      "LaL0E43MCSU",
      "2KWdkaegG8M",
      "9M8aNJkhM5k",
      "5-svS-WJGQM",
      "YbmpMMaJyLE",
      "pWP17ZzhkF4",
      "Pz3FhGbCgcA",
      "mlRBbY3t67o",
      "W-hBaEvYWq0",
      "aoIgrag2rMU",
      "VDhO0LFlt3M",
      "MIfgoCJzpL0",
      "3XHcLlI7Ono",
    ],
    initialMessages: ["졸음운전 퇴치", "기분좋은 음악과 함께 드라이브하세요"],
    category: ["music"],
  },
  {
    id: "shower",
    name: "샤워하는건지 노래방을 온건지",
    title: "SHOWER",
    tags: "#샤워할 때 #수도세 폭발",
    img: "/images/shower.png",
    playList: [
      "7cR8rOx-f3A",
      "VS6-HD9hEg4",
      "Ye9w2UsXvOA",
      "nUCSfbhiJmw",
      "hiIM7NGl4WM",
      "kL03ZTj7H_w",
      "IVy79cKldsE",
      "Wky1O1-vIY0",
      "Mt2ONjTji5I",
      "Tc0Z6A7xl7Y",
      "QwsIEFc6tDE",
      "e3MG4dcm594",
    ],
    initialMessages: ["신나게 나갈 준비!"],
    category: ["music"],
  },
  {
    id: "hiphop",
    name: "너희가 힙합을 아느냐",
    title: "HIPHOP",
    tags: "#Swag #미친비트",
    img: "/images/hiphop.png",
    playList: [
      "JzziwpDrigs",
      "W62qZGUUCyM",
      "HP2o29Sku3k",
      "Creerc3t884",
      "XOYBEwehQGo",
      "JPL6KtFG5Kg",
      "G5HFMa5RdOs",
      "1sftOR5Hj8c",
      "V_3ma4k_Wv4",
      "VmRDz694BHE",
      "hSZYCSpJ8NI",
      "FklSPE0_ueQ",
      "nhhG7pGzf3M",
      "8RvQWKZuqJI",
      "aBsHVDKxlvA",
      "t2vwXfddmXk",
      "WVyfl9QNulY",
      "jZ-Tg3hxBos",
    ],
    initialMessages: ["힙하고 트렌디한 음악"],
    category: ["music"],
  },
  {
    id: "running",
    name: "런닝할 때 듣는 심장에 좋은 노래",
    title: "RUNNING",
    tags: "#달리기 #우사인볼트",
    img: "/images/running.png",
    playList: [
      "J7rE454YPDI",
      "Pm0eW05WiM8",
      "bG1B39Fdusg",
      "bOQA33VNo7w",
      "9K5pkK8Ia_o",
      "vWjK42ZxlcQ",
      "EbPcuOryNX8",
      "jR2ZqEgGTQc",
      "UmrKn9s7BmM",
      "MXAw-pvRr3Q",
    ],
    initialMessages: ["우사인볼트로 빙의되는 음악"],
    category: ["music"],
  },
  {
    id: "gym",
    name: "헬창들이 좋아하는 음악",
    title: "GYM",
    tags: "#헬스 #근육펌핑",
    img: "/images/gym.png",
    playList: [
      "HurUkZs8zR0",
      "8KrcRZIqtUQ",
      "cLW7tFH0B1A",
      "EecYFlPPVLQ",
      "AABBtWhsfTw",
      "X6BOs1Ejpvw",
      "RJB4i4fmdTY",
      "qnIvNgOsh1k",
      "FTO_iooSui0",
      "7A08jgKKRvk",
      "MZI-wllHBeQ",
      "WT9wG4elNG8",
      "_BTWvXFTMXg",
      "vWjK42ZxlcQ",
    ],
    initialMessages: ["단백질 보충제가 필요없는 음악"],
    category: ["music"],
  },
  {
    id: "club",
    name: "자취방 강남클럽 만들기",
    title: "CLUB",
    tags: "#클럽음악 #EDM",
    img: "/images/club.png",
    playList: [
      "iAKTyUQjvB4",
      "797FGp_S9dw",
      "gmpnpDn0iwU",
      "OsMurA0GJ9I",
      "9i3CpoVnTaM",
      "ydbYgDyFqbA",
      "y_xfYzIvBLY",
      "wfPtQWOlw6I",
      "m0Jjw1qflok",
      "qrnL_wZgoWY",
      "CufV99rmfro",
      "oc45iYaJhe4",
      "zh1H0GLFq6c",
      "k3LtNxYOyhE",
      "769Qha-Pjgg",
      "hThEYRqP7E0",
    ],
    initialMessages: ["흥이 내 몸을 지배한다"],
    category: ["music"],
  },
  {
    id: "sleep",
    name: "이런걸로 잠이 든다고?ㅋㅋㅋ 난 절...",
    title: "SLEEP",
    tags: "#수면맛집 #불면증치료",
    img: "/images/sleep.png",
    playList: [
      "v6jKtM7ZTrU",
      "y78lBmYU0yE",
      "8O6B3uXblTM",
      "p2fxv3PAtLU",
      "O_IYJvcxrc4",
      "gVglBGRApoE",
      "KZQIaPl-smI",
      "ldsz1dHkJw4",
      "sXLCkQnn1vc",
      "qNfoeYgoZHw",
      "NIrAWVsNonE",
      "cxY793jRiZ8",
      "0f0gqJ7LCE4",
      "P470PcW8kMQ",
      "eLLjQVG9HZs",
    ],
    initialMessages: ["당신은 이제 잠에 듭니다", "레드썬"],
    category: ["music"],
  },
  {
    id: "romantic",
    name: "라면먹고 갈래?",
    title: "ROMATIC",
    tags: "#로맨틱 #무드",
    img: "/images/romantic.png",
    playList: [
      "5HgU3cN_nds",
      "atkAOjx7kh8",
      "y_7GSNT8xJU",
      "7BFjNrmQO5Y",
      "kALePlJG9tg",
      "uHAI1OazZTI",
      "YdMSN_6If_w",
      "lE8qUAgUQA4",
      "HPosT0cOj9E",
      "pLVK8Md1TOs",
      "hb50T53z8cg"
    ],
    initialMessages: ["오늘 밤을 뜨겁게 만들어줄 음악"],
    category: ["music"],
  },
  {
    id: "emotion",
    name: "새벽에 듣는 감성 음악",
    title: "EMOTIONAL",
    tags: "#늦은 밤 #감성터짐",
    img: "/images/emotion.png",
    playList: [
      "1QEUJ5d7WO8",
      "AJ5aoJ_HQAM",
      "2j4VbYE4ePY",
      "69Q_KkfJm58",
      "o_UUYwymh30",
      "Hl3jkH_ySDU",
      "3LugpXuG-g",
      "z2t5ifkjqao",
      "tRqI9Ta6m-I",
      "5xlAThyCn5k",
      "OycgifzTHgk",
      "_qmcg4vqmVg",
      "wDw4yvv1OHk",
    ],
    initialMessages: ["당신은 혼자가 아니예요"],
    category: ["music"],
  },
  {
    id: "sweet",
    name: "데이트 전 거울앞에서 설레발 칠때 듣는 음악",
    title: "SWEETY",
    tags: "#당도200% #닿을듯말듯",
    img: "/images/sweet.png",
    playList: [
      "Ov5JSV3_npw",
      "6jo-JVE3MYY",
      "p55o5s0okl8",
      "6WPLG6_sBa4",
      "zlskcG6CLAY",
      "rclHHYKLyMI",
      "ApvUrbK1Cyg",
      "nqM7BpQT1Q0",
      "69axXYYwHWU",
      "iCYOM2mYZYw",
      "W81vQiuCjWw",
      "2KWdkaegG8M",
      "6ZmN3wbrotM",
      "uqc04XW9_ks",
      "OG5WtMAXKDY",
      "PcvrIz8ZiU8",
      "Gj31xjvMRAc",
      "b3Ry5LSHQGU",
    ],
    initialMessages: ["심장아 나대지마"],
    category: ["music"],
  },
  {
    id: "travel",
    name: "모히또가서 몰디브나 한잔할래?",
    title: "TRAVEL",
    tags: "#여행 #짐부터싸자",
    img: "/images/travel.png",
    playList: [
      "Z49PyniUwi0",
      "sbhWpmoYu0c",
      "Pt5Mxv4StCo",
      "TwNQRHWOH2U",
      "3XHcLlI7Ono",
      "YbmpMMaJyLE",
      "TwCErxQbfg4",
      "LxNKThYoIhE",
      "Vge70tNobXs",
      "hEyjVpJV7i0",
      "q8kRrGBDuFg",
      "swQTtmHjMhM",
      "jjqFnO284hA",
      "76Wygb_Aqz0",
    ],
    initialMessages: ["난 짐쌀때가 제일 설레더라"],
    category: ["music"],
  },
  {
    id: "classic",
    name: "클래식? 어.. 베토벤! 또..",
    title: "CLASSIC",
    tags: "#진짜클래식매력 #오케스트라",
    img: "/images/classic.png",
    playList: [
      "jgpJVI3tDbY",
      "ZKFwQFBwQFU",
      "rOjHhS5MtvA",
      "ZAr-PKUyo7Q",
      "4788Tmz9Zo",
      "_z8TZjcqYhY",
      "eY1XtWyKlJA",
      "17ILK7mjdVI",
      "be7uEyyNIT4",
      "fsxQ-eD5_C4",
      "sxJu2pwOcgk",
      "Lsy9T6sOPFk",
      "aNMlq-hOIoc",
      "fNU-XAZjhzA",
      "rPp4643qkIk",
      "KH7Mli_cKEs",
      "g91kQyy4G7E",
    ],
    initialMessages: ["매력적인 클래식 음악"],
    category: ["music"],
  },

];
