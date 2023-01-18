import React from "react";
import type { NextPage } from "next";
import Header from "@/components/header";
import Land from "@/components/land";
import Footer from "./footer";

const Home: NextPage = () => {
  return (
    <div>
      <title>VitaStrong</title>
      <div>
        <Header />
        <Land />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
