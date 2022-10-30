import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/core/Navbar";
import Banner from "../components/mainPage/Banner";
import Proyects from "../components/mainPage/Proyects/Proyects";
import AboutMe from "../components/mainPage/AboutMe/AboutMe";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe />
      <Proyects />
    </div>
  );
};

export default Home;
