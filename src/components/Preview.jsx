import React from "react";
import { NavLink } from "react-router-dom";
import PostList from "./PostList";

const Preview = (props) => {
  return (
    <section id="imageType" className={`imageType__wrap ${props.element}`}>
      <h2>{props.title}</h2>
      <p>주요 게시판 한 눈에 보기.</p>
      <div className="image__inner container">
        <post className="image img1">
          <h3 className="image__title">인디토크 게시판</h3>
          <p className="image__desc">
            <PostList />
          </p>
          <NavLink className="image__btn" to="/talk">
            자세히 보기
          </NavLink>
        </post>
        <post className="image img2">
          <h3 className="image__title">같이봐요 게시판</h3>
          <p className="image__desc">
            <PostList />
          </p>
          <NavLink className="image__btn yellow" to="/together">
            자세히 보기
          </NavLink>
        </post>
      </div>
    </section>
  );
};

export default Preview;
