import React from "react";
import type { NextPage } from "next";
import Header from "@/components/header";
import Land from "@/components/land";
import Footer from "./footer";
import Start from "@/components/questions/start";
import FullName from "@/components/questions/fullname";
import Age from "@/components/questions/age";
import Weight from "@/components/questions/weight";
import Gender from "@/components/questions/gender";

const Home: NextPage = () => {
  return (
    <div>
      <title>VitaStrong</title>
      <div>
        <Header />
        <Land slides={[Start, FullName, Age, Gender, Weight]}/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
