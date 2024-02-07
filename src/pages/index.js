// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css";
import Profile from "./components/profile";
import Gallery from "./components/gallery";
import Profile1 from "./qcomps/profile_mistake";
import MyComp from "./qcomps/firstcomp";
import Bio from "./qcomps/bios";
import ToDoList from "./qcomps/todos";

export default function Home() {
  return (
    <div>
      <div className={styles.main}>
        <Bio />
      </div>
      <div className={styles.main}>
        <Gallery />
      </div>
      <div className={styles.main}>
        <Profile />
      </div>
      <div className={styles.main}>
        <Profile1 />
      </div>
      <div className={styles.main}>
        <MyComp />
      </div>
      <div className={styles.main}>
        <MyComp />
      </div>
      <div className={styles.main}>
        <ToDoList />
      </div>

    </div>
  );
}
