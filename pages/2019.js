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
          <title>  Erin Wolf 2019</title>
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
            <span className={styles.year}> 2019 </span>
            </div>

            <div className={styles.paintingItem}>
                <img src="/paintings/fruits-of-my-labor-2019.png" alt="untitled yellow painting"className={styles.paintingImage} />
                <div className={styles.paintingText}>
                    <i>  Fruits of My Labor  </i> <br/>
                    <span className={styles.textYear}> 2019 </span>

                </div>
            </div>

            <div className={styles.paintingItem}>
                <img src="/paintings/Open-Up!-2019.jpg" alt="untitled yellow painting"className={styles.paintingImage} />
                <div className={styles.paintingText}>
                    <i>  Open Up! </i> <br/>
                    <span className={styles.textYear}> 2019 </span>

                </div>
            </div>



            <div className={styles.paintingItem}>
                <img src="/paintings/It_s Like-2019.jpg" alt="untitled yellow painting"className={styles.paintingImage} />
                <div className={styles.paintingText}>
                    <i>  It's Like </i> <br/>
                    <span className={styles.textYear}> 2019 </span>

                </div>
            </div>

            <div className={styles.paintingItem}>
                <img src="/paintings/Never-Have-I-Ever-2019.jpg" alt="untitled yellow painting"className={styles.paintingImage} />
                <div className={styles.paintingText}>
                    <i>  Never Have I Ever </i> <br/>
                    <span className={styles.textYear}> 2019 </span>

                </div>
            </div>



            <div className={styles.paintingItem}>
                <img src="/paintings/It-Was-So-Sweet-2019.png" alt="untitled yellow painting"className={styles.paintingImage} />
                <div className={styles.paintingText}>
                    <i>  It Was So Sweet </i> <br/>
                    <span className={styles.textYear}> 2019 </span>

                </div>
            </div>

            <div className={styles.paintingItem}>
                <img src="/paintings/Knuckle-Stitches-2019.jpg" alt="untitled yellow painting"className={styles.paintingImage} />
                <div className={styles.paintingText}>
                    <i>  Knuckle Stiches </i> <br/>
                    <span className={styles.textYear}> 2019 </span>

                </div>
            </div>




          </div>
        </main>
      </div>
  )
}
