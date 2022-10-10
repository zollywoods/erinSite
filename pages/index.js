import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

export default function Home() {

  const[menuVisibility, setMenuVisibility] = useState(styles.menuList); 

  const menuHandler = (  ) => {
    if( menuVisibility === styles.menuList ){
      setMenuVisibility(styles.menuListVisible)
    }
    else{
      setMenuVisibility(styles.menuList)
    }
  }

  return (
    <div className={styles.container}>
        <Head>
          <title>Erin Wolf</title>
          <meta name="description" content="Erin Wolf's Art Website, Painting" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <img src="/symbols/circle.png" className={styles.circle}/>
        <img src="/symbols/circle.png" className={styles.circleTwo}/> */}

        <div className={styles.menuContainer} >
          <div className={styles.menu} >
            <span onClick={ () => menuHandler()}> MENU </span> 
            <ul className={menuVisibility}>
              <hr className={styles.line}/>
              <hr className={styles.line}/> <br/>
              <li> <a href="/2022"> 2022 </a></li>
              <li> <a href="/2021"> 2021 </a></li>
              <li> <a href="/2020"> 2020 </a></li>
              <li> <a href="/2019"> 2019 </a></li>
              <li> CV</li>
              <li> Contact</li>

            </ul>
          </div>
        </div>
        <main className={styles.main}>
          <h1 className={styles.title}>
            ERIN WOLF <br/>
            {/* <hr className={styles.line}/> */}
          </h1>

    
        </main>
      </div>
  )
}
