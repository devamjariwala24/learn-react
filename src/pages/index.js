// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import List from './qcomps/artistsRemoveArr'
import BucketList from './qcomps/arrObj'
const Home = () => (
  <>
    <div className={styles.main}>
      <Profile />
    </div>
    <div className={styles.main}>
      <List />
    </div>
    <div className={styles.main}>
      <BucketList />
    </div>
  </>
);

export default Home;
