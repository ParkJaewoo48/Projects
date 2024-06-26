import React from "react";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Image from "./components/Image";
import ImgText from "./components/ImgText";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Text from "./components/Text";

function App() {
  return (
    <>
      <Header element="nexon" />
      <Main>
        <Slider element="nexon" />
        <Image element="section nexon" title="FDW에 오신 걸 환영합니다!" />
        <Card element="section nexon" title="공연 후기" />
        <ImgText element="section nexon gray" title="이미지 텍스트 유형" />
        {/* <Banner element="nexon" title="배너 영역" /> */}
        {/* <Text element="section nexon" title="텍스트 유형01" /> */}
      </Main>
      <Footer element="nexon section gray" />
    </>
  );
}

export default App;
