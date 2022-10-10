import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Painting.module.css'
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
          <title>  Erin Wolf 2020</title>
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
          <a href="/">  ERIN WOLF</a>  <br/>
            {/* <hr className={styles.line}/> */}
          </h1>

          <div className={styles.painting}>
            <div className={styles.paintingYear}> 
            <span className={styles.year}> 2020 </span>
            </div>

            <div className={styles.paintingItem}>
                <img src="/paintings/Untitled-(Orange-and-Green)-2020.JPG" alt="untitled yellow painting"className={styles.paintingImage} />
                <div className={styles.paintingText}>
                    <i>  Untitled (Orange and Green)  </i> <br/>
                    <span className={styles.textYear}> 2020 </span>

                </div>
            </div>

            <div className={styles.paintingItem}>
                <img src="/paintings/fountain-2020.JPG" alt="untitled yellow painting"className={styles.paintingImage} />
                <div className={styles.paintingText}>
                    <i>  Fountain </i> <br/>
                    <span className={styles.textYear}> 2020 </span>

                </div>
            </div>

            {/* <div className={styles.paintingItem}>
                <img src="/paintings/Reasons-2022.jpg" alt="untitled reason painting"className={styles.paintingImage} />
                <div className={styles.paintingText}>
                    <i>  Reasons </i> <br/>
                    <span className={styles.textYear}> 2021 </span>

                </div>
            </div> */}



          </div>
        </main>
      </div>
  )
}
