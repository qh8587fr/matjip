// 식당 데이터
// 새 식당을 추가하려면 이 배열에 객체를 하나 더 추가하면 됩니다.
//
// 상단 사진(외관/내부) 파일명 규칙: images/{imageKey}_외관.png, images/{imageKey}_내부사진.png
// (imageKey는 화면에 보이는 name과 달라도 됩니다 - 실제 저장한 사진 파일명 접두어를 넣어주세요)
// 메뉴 사진은 menus 배열 각 항목의 image에서 직접 경로를 지정합니다.
// menus 배열의 첫 번째 항목이 "대표 메뉴"로 카드에 먼저 노출되고,
// 나머지는 "메뉴 더보기"를 눌러야 보입니다.
//
// region: 좌측 사이드바 "지역" 필터에 쓰일 값 (예: "망원")
// category: 좌측 사이드바 "음식 종류" 필터에 쓰일 값 (예: "돼지고기")
// mapUrl: 네이버/구글 지도 링크 아무거나 가능 (버튼 텍스트가 자동으로 "네이버 지도" / "구글 지도"로 바뀝니다)
// photos: "추가 사진" 섹션에 들어갈 사진들 (메뉴판 사진과 별도) - 파일 경로 배열

const restaurants = [
  {
    name: "정각 망원본점",
    imageKey: "정각",
    region: "망원",
    category: "돼지고기",
    mapUrl: "https://naver.me/GTn3FTBL",
    photos: ["images/정각_된장술밥.png", "images/정각_정각스페셜.png"],
    menus: [
      {
        name: "정각의 선택",
        price: "59,000원",
        desc: "알등심, 살치살, 목살, 돈치살 정각시그니처 한판",
        image: "images/정각_메뉴1.png",
      },
      {
        name: "직화소갈비된장술밥",
        price: "8,000원",
        image: "images/정각_메뉴2.png",
      },
      {
        name: "340정각프리미엄 돈항정",
        price: "19,000원",
        image: "images/정각_메뉴3.png",
      },
      {
        name: "340정각 프리미엄 돈치살",
        price: "19,000원",
        desc: "돼지고기에서 600g 소량만 나오는 특수부위",
        image: "images/정각_메뉴4.png",
      },
      {
        name: "340정각 특상 목살",
        price: "18,000원",
        image: "images/정각_메뉴5.png",
      },
    ],
  },
  {
    name: "한강껍데기",
    imageKey: "한강껍데기",
    region: "망원",
    category: "돼지고기",
    mapUrl: "https://naver.me/FLyTPIlT",
    photos: ["images/한강껍데기_고기1점.png", "images/한강껍데기_껍데기.png"],
    menus: [
      {
        name: "껍데기",
        price: "10,000원",
        image: "images/한강껍데기_메뉴1.png",
      },
      {
        name: "생목살",
        price: "17,000원",
        image: "images/한강껍데기_메뉴2.png",
      },
      {
        name: "생삼겹",
        price: "17,000원",
        image: "images/한강껍데기_메뉴3.png",
      },
    ],
  },
  {
    name: "망원 여장군",
    imageKey: "여장군",
    region: "망원",
    category: "돼지고기",
    mapUrl: "https://naver.me/xP8mR9CM",
    photos: ["images/여장군_고기사진.png", "images/여장군_고기1점.png"],
    menus: [
      {
        name: "살모듬 300g",
        price: "15,000원",
        desc: "갈매기살, 아구살, 뽈살, 항정살, 꼬들살, 혀밑살 6가지 부위를 섞어 1인분 30…",
        image: "images/여장군_메뉴1.png",
      },
      {
        name: "부속모듬 300g",
        price: "15,000원",
        desc: "꼬치요리로 유명한 오소리감투, 염통, 유통, 껍데기, 돈설 5가지부위 섞어서, 1…",
        image: "images/여장군_메뉴2.png",
      },
      {
        name: "안살 300g",
        price: "15,000원",
        desc: "20~30g만 생산되는 부드러운 식감의 고급부위",
        image: "images/여장군_메뉴3.png",
      },
      {
        name: "육사시미",
        price: "15,000원",
        desc: "매일 신선한 한우를 이용한 육사시미 [뭉티기] 매실청 특제 소스와 담백한…",
        image: "images/여장군_메뉴4.png",
      },
      {
        name: "육회",
        price: "15,000원",
        desc: "신선한 한우를 사용한 여장군만의 비법인 간장소스베이스의 달콤한 육회입…",
        image: "images/여장군_메뉴5.png",
      },
    ],
  },
];
