import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";

const Review = () => {
  return (
    <div>
      <Header />
      <h1>공연 후기</h1>
      <PostList />
      <Footer />
    </div>
  );
};

export default Review;
