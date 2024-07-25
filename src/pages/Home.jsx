import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Slider from "../components/Slider";
import Card from "../components/Card";
import ImgText from "../components/ImgText";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Banner from "../components/Banner";
import Text from "../components/Text";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Main>
        <Slider element="nexon" />
        <Image element="section nexon" title="FDW에 오신 걸 환영합니다!" />
        <Card element="section nexon" title="공연 후기" />
        <ImgText element="section nexon gray" title="이미지 텍스트 유형" />
        {/* <Banner element="nexon" title="배너 영역" />
        <Text element="section nexon" title="텍스트 유형01" /> */}
      </Main>
      <Footer element="nexon section gray" />
    </div>
  );
};

export default Home;
