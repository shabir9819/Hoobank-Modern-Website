import React, { useState , useLayoutEffect} from "react";
import styles from "../styles";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testomonials,
  Clients,
  CTA,
  Footer,
} from "./components";


export default function App() {
  const [showStat, setshowStat ] = useState(true);
  useLayoutEffect(() => {
    const scrollEvent = (e) => {
      if (e.currentTarget.scrollY > 1000) {
        setshowStat(false);
      } else if (e.currentTarget.scrollY === 0) {
        setshowStat(false);
      }
      else if (e.currentTarget.scrollY > 200){
        setshowStat(true);
      }
      else{
        setshowStat(false);
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [showStat]);
  return (
    <>
      {/* Navbar */}
      <div className={`bg-primary w-full overflow-hidden `}>
        <div className={`${styles.flexCenter} px-6 md:px-16 w-full`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Hero */}
        <div className={` bg-black ${styles.flexStart} sm:pl-6 md:pl-16 md:pr-0 w-full`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={` bg-black ${styles.flexStart} items-center md:items-start px-6 md:px-16 text-white`}>
          <div className={`${styles.boxWidth}`}>
            {showStat && <Stats />}
            <Business />
            <Billing />
            <CardDeal />
            <Testomonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
