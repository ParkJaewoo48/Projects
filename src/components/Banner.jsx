import React from "react";

const Banner = (props) => {
  return (
    <section id="bannerType" className={`banner__wrap ${props.element}`}>
      <h2 className="blind">{props.title}</h2>
      <div className="banner__inner">
        <h3 className="title">유튜버 웹보이</h3>
        <p className="desc">
          더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
          <a href="/" title="유튜브 페이지 이동">
            youtube.com/c/Webstoryboy
          </a>
        </p>
        <span className="small">배너 유형01</span>
      </div>
    </section>
  );
};

export default Banner;
