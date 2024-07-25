import React from "react";
import Slider from "react-slick";
import "../assets/css/ConcertList.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparents" }}
      onClick={onClick}
    />
  );
}

const ConcertList = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    sidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  // 예제 데이터
  const events = [
    {
      id: 1,
      imageUrl:
        "https://cdnticket.melon.co.kr/resource/image/upload/product/2024/07/2024070313495729b3c502-7b06-4b1e-b5ae-92e1c2d5bb64.jpg/melon/resize/180x250/strip/true",
      title: "4월은 너의 거짓말",
      date: "2024.06.28 ~ 2024.08.25",
      place: "예술의 전당 CJ 토월 극장",
    },
    {
      id: 2,
      imageUrl:
        "https://cdnticket.melon.co.kr/resource/image/upload/product/2024/04/20240423172356136720c2-47ce-4806-9720-51f10f152487.jpg/melon/resize/180x250/strip/true",
      title: "프랑켄슈타인",
      date: "2024.06.05 ~ 2024.08.25",
      place: "블루스퀘어 신한카드홀",
    },
    {
      id: 3,
      imageUrl:
        "https://cdnticket.melon.co.kr/resource/image/upload/product/2024/05/2024052819390959351f00-51ba-4540-9c9c-9588bc1ada99.jpg/melon/resize/180x250/strip/true",
      title: "베르사유의 장미",
      date: "2024.07.16 ~ 2024.10.13",
      place: "충무아트센터 대극장",
    },
    {
      id: 4,
      imageUrl:
        "https://cdnticket.melon.co.kr/resource/image/upload/product/2024/04/20240424170225cf362e84-4054-407f-993b-99bdd0709c52.jpg/melon/resize/180x250/strip/true",
      title: "새빨간 거짓말",
      date: "2024.06.14 ~ 2024.09.08",
      place: "부산메트로홀",
    },
    {
      id: 5,
      imageUrl:
        "https://cdnticket.melon.co.kr/resource/image/upload/product/2024/05/2024052315061282232f40-b3b5-4d13-b07d-d096fe5c1f44.jpg/melon/resize/180x250/strip/true",
      title: "젠틀맨스 가이드",
      date: "2024.07.06 ~ 2024.10.20",
      place: "광림아트센터 BBCH홀",
    },
    {
      id: 6,
      imageUrl:
        "https://cdnticket.melon.co.kr/resource/image/upload/product/2023/03/202303171047117fdc060a-8274-4ab8-ab99-990489e4f652.jpg/melon/resize/180x250/strip/true",
      title: "[서울 대학로] 연극 라면",
      date: "2023.03.20 ~ ",
      place: "해피씨어터",
    },
  ];

  return (
    <div className="carousel">
      <h2>이주의 공연</h2>
      <div className="carousel-list">
        <Slider {...settings}>
          {events.map((event) => (
            <div key={event.id} className="box">
              <img src={event.imageUrl} alt="대표 이미지 준비 중" />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.place}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ConcertList;

// const Slider = (props) => {
//   return (
//     <section id="sliderType" className={`slider__wrap ${props.element}`}>
//       <h2 className="blind">슬라이드 유형</h2>
//       <div className="slider__inner">
//         <div className="slider">
//           <div className="slider__img">
//             <div className="desc">
//               <span>fdw</span>
//               <h3>A Four-Day Week</h3>
//               <p>
//                 <br />
//               </p>
//               <div className="btn">
//                 <a href="/">공연장 보기</a>
//                 <a href="/" className="black">
//                   캘린더 보기
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="slider__arrow">
//             <a href="/" className="left">
//               <span className="ir">이전 이미지</span>
//             </a>
//             <a href="/" className="right">
//               <span className="ir">다음 이미지</span>
//             </a>
//           </div>
//           <div className="slider__dot">
//             <a href="/" className="dot active">
//               <span className="ir">1</span>
//             </a>
//             <a href="/" className="dot">
//               <span className="ir">2</span>
//             </a>
//             <a href="/" className="dot">
//               <span className="ir">3</span>
//             </a>
//             <a href="/" className="play">
//               <span className="ir">플레이</span>
//             </a>
//             <a href="/" className="stop">
//               <span className="ir">정지</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
