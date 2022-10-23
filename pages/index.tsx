import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/core/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
