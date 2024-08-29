import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/Login.css";
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h1 className="login-title">Gig-Vibe</h1>
        <div className="login-box">
          <input type="text" placeholder="아이디" className="input-field" />
          <input
            type="password"
            placeholder="비밀번호"
            className="input-field"
          />
          <button className="login-button">로그인</button>
          <div className="additional-options">
            <button className="forgot-password">비밀번호 찾기</button>
            <button className="signup" onClick={handleSignUpClick}>
              회원가입
            </button>
          </div>
        </div>
      </div>
      <Footer element="nexon section gray" />
    </div>
  );
};

export default Login;

// const Login = () => {
//   return (
//     <div>
//       <Header />
//       <form className="loginForm">
//         <div>
//           <h1 id="login_title">로그인</h1>
//         </div>
//         <div>
//           <div className="input">
//             <input
//               type="text"
//               className="userId"
//               id="userId"
//               placeholder="아이디"
//               autoFocus
//             />
//             <input
//               type="password"
//               className="password"
//               id="password"
//               placeholder="비밀번호"
//             />
//             <button id="loginBut">Login</button>
//           </div>
//         </div>
//       </form>
//       <div className="link">
//         <NavLink to="/findId">아이디 찾기</NavLink>
//         <span>&nbsp;|&nbsp;</span>
//         <NavLink to="/findPw">비밀번호 찾기</NavLink>
//         <span>&nbsp;|&nbsp;</span>
//         <NavLink to="/register">회원가입</NavLink>
//       </div>
//       <Footer element="nexon section gray" />
//     </div>
//   );
// };
