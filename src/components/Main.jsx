import React from "react";
import Card from "./Card";
import Preview from "./Preview";
import ConcertList from "./ConcertList";
// import PostList from "./PostList";

const Main = () => {
  return (
    <main id="main" role="main">
      <ConcertList element="nexon" />
      <Preview element="section nexon" />
      {/* <Card element="section nexon" title="공연 후기" /> */}
    </main>
  );
};

export default Main;
