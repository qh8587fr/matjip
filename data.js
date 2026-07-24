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
  {
    name: "하우스오브바이닐",
    imageKey: "하우스오브바이닐",
    region: "망원",
    category: "커피",
    mapUrl: "https://naver.me/xBwJEOKG",
    photos: ["images/하우스오브바이닐_음식1.png", "images/하우스오브바이닐_음식2.png"],
    menus: [
      { name: "홍시 파블로바 (Soft Persimmon Pavlova)", price: "13,000원" },
      { name: "딸기 파블로바 (Strawberry Pavlova)", price: "13,000원" },
      { name: "더블 크림 브륄레 (Double Cream Brulee)", price: "6,000원" },
      { name: "녹차 파운드 케이크 (Green Tea Pound Cake)", price: "7,000원" },
      { name: "초코 파운드 케이크 (Chocolate Pound Cake)", price: "7,000원" },
      { name: "애플 시나몬 파운드 케이크 (Apple Cinnamon Pound Cake)", price: "7,000원" },
    ],
  },
  {
    name: "UIG",
    imageKey: "UIG",
    region: "망원",
    category: "커피",
    mapUrl: "https://naver.me/5uIYtFnk",
    photos: ["images/UIG_음식1.png", "images/UIG_음식2.png"],
    menus: [
      {
        name: "Eton mess",
        price: "9,500원",
        desc: "머랭, 체리, 요거트크림이 들어간 영국식 디저트",
        image: "images/UIG_메뉴1.png",
      },
      {
        name: "Banana stickypudding",
        price: "9,000원",
        desc: "촉촉한 바나나스펀지 케이크 위에 아이스크림을 올리고 토피 소스를 곁들…",
        image: "images/UIG_메뉴2.png",
      },
      {
        name: "Tigre",
        price: "4,200원",
        desc: "우이그, 헤이즐넛, 레몬, 말차, 초코, 무화과로 구성된 구움과자 티그레",
        image: "images/UIG_메뉴3.png",
      },
      {
        name: "Jambon&Fig Sandwich",
        price: "9,800원",
        desc: "잠봉, 무화과잼, 루꼴라, 하바티치즈가 들어간 바게트 샌드위치.",
        image: "images/UIG_메뉴4.png",
      },
      {
        name: "우이그x크리머리 아포가토",
        price: "8,000원",
        desc: "망원동의 크리머리와 협업한 아이스크림 메뉴 우이그 에스프레소 x 크리머…",
        image: "images/UIG_메뉴5.png",
      },
    ],
  },
  {
    name: "무계획",
    imageKey: "무계획",
    region: "망원",
    category: "커피",
    mapUrl: "https://naver.me/Fw7iINc8",
    photos: ["images/무계획_음식1.png", "images/무계획_음식2.png"],
    menus: [
      {
        name: "바나나커스터드푸딩 (브래드푸딩)",
        price: "8,500원",
        desc: "바닐라빈이 뜸뿍들어간 커스터드생크림+달달바나나",
        image: "images/무계획_메뉴1.png",
      },
      {
        name: "초코푸딩",
        price: "8,500원",
        desc: "생초콜릿이들어가 찐~한 초코크림과 바나나는 진리조합!",
        image: "images/무계획_메뉴2.png",
      },
      {
        name: "브라운치즈 크로플",
        price: "5,500원",
        desc: "바닐라 아이스크림과 리얼 딥브라운 치즈의 조화",
        image: "images/무계획_메뉴3.png",
      },
      {
        name: "무계획 커피",
        price: "6,500원",
        desc: "라떼 베이스에 수제아몬드크림을 더한 '무계획커피'(아인슈페너)",
        image: "images/무계획_메뉴4.png",
      },
    ],
  },
];
