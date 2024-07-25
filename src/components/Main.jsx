import React from "react";
import Slider from "./Slider";
import Card from "./Card";
import Image from "./Image";
import ImgText from "./ImgText";
import Banner from "../components/Banner";
import Text from "../components/Text";

const Main = () => {
  return (
    <main id="main" role="main">
      <Slider element="nexon" />
      <Image element="section nexon" title="FDW에 오신 걸 환영합니다!" />
      <Card element="section nexon" title="공연 후기" />
      <ImgText element="section nexon gray" title="이미지 텍스트 유형" />
      {/* <Banner element="nexon" title="배너 영역" />
        <Text element="section nexon" title="텍스트 유형01" /> */}
    </main>
  );
};

// const Main = ({ children }) => {
//   return (
//     <main id="main" role="main">
//       {children}
//     </main>
//   );
// };

export default Main;
