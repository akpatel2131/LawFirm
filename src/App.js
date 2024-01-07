import Header from './Pages/Header';
import styles from './app.module.css';
import Intro from "./Pages/Intro";
import InfoContent from "./Pages/InfoContent"
import ClientInfo from './Pages/Client';
import Member from "./Pages/Member"
import AreaOfPractice from "./Pages/PracticeArea";
import Faq from "./Pages/FAQ's"
import React from "react";
import Subscribe from "./Pages/Subscribe";
import Footer from "./Pages/Footer";


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.topContainer}>
        <Header />
        <Intro />
      </div>
      <div className={styles.components}>
        <InfoContent/> 
        <AreaOfPractice /> 
        <ClientInfo />
        <Member />
        <Faq />
        <Subscribe />
      </div>
      <div className={styles.bottomContainer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
