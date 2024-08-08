import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header id="headerType" className={`header__wrap ${props.element}`}>
      <div className="header__inner">
        <div className="header__logo">
          <NavLink to="/">Gig-vibe</NavLink>
        </div>
        <nav className="header__menu">
          <ul>
            {/* <li>
              <NavLink to="/this_week">이주의 공연</NavLink>
              </li> */}
            <li>
              <NavLink to="/talk">인디토크</NavLink>
            </li>
            <li>
              <NavLink to="/together">같이봐요</NavLink>
            </li>
            <li>
              <NavLink to="/info_perform">공연 정보</NavLink>
            </li>
            {/* <li>
              <NavLink to="/find_perform">공연장 찾기</NavLink>
              </li> */}
            <li>
              <NavLink to="/review_perform">공연 후기</NavLink>
            </li>
            <li>
              <NavLink to="/promote_perform">공연 홍보</NavLink>
            </li>
            <li>
              <NavLink to="/intro">소개</NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__member">
          <NavLink to="/login">로그인</NavLink>
          <NavLink to="/signup">회원가입</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
