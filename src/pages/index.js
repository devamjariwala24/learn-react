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
import Profile2 from "./components/profile_props";
import Gallery1 from "./qcomps/gallery_props";
import Holder from "./components/square";
import PackingList from "./components/props_item";
import List from "./qcomps/list_keys_id";
import RecipeList from "./qcomps/recipes";
import MenuBar from "./qcomps/menuBar";
import GalleryS from "./components/whyState";
import GallerySt from "./components/whyState";
import PersonData from "./components/stateObj";
import FeedbackForm from "./qcomps/thankYouCrash";
import Counter from "./components/snapshot";
import Form from "./components/snapshot2";
import Counter1 from "./components/queueUpdates";
import RequestTracker from "./qcomps/shoppingCart";
import Scoreboard from "./qcomps/updObjectsForm";

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
      <div className={styles.main}>
        <Profile2 />
      </div>
      <div className={styles.main}>
        <Gallery1 />
      </div>
      <div className={styles.main}>
        <Holder />
      </div>
      <div className={styles.main}>
        <PackingList />
      </div>
      <div className={styles.main}>
        <List />
      </div>
      <div className={styles.main}>
        <RecipeList />
      </div>
      <div className={styles.main}>
        <MenuBar />
      </div>
      <div className={styles.main}>
        <GalleryS />
      </div>
      <div className={styles.main}>
        <GallerySt />
      </div>
      <div className={styles.main}>
        <PersonData />
      </div>
      <div className={styles.main}>
        <FeedbackForm />
      </div>
      <div style={{ height: "10px" }} className={styles.main}>
        <Counter />
      </div>
      <div style={{ height: "10px" }} className={styles.main}>
        <Form />
      </div>
      <div style={{ textAlign: "center" }}>
        <Counter1 />
      </div>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <RequestTracker />
      </div>
      <div style={{ height: "10px" }} className={styles.main}>
        <Scoreboard/>
      </div>
    </div>
  );
}
