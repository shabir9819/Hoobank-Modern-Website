import React from "react";
import styles, { layout } from "../../../styles";
import { feedback } from "../../constants";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

export default function Testomonials() {
  return (
    <>
      <section
        id="clients"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      >
        <div className="absolute w-[90%] h-[80%] -right-[50%] rounded-full z-0 blue__gradient"></div>
        <div className="flex flex-col md:flex-row  justify-between items-center mb-6 md:mb-16 z-[1] w-full">
          <h2 className={styles.heading2}>
            What people are <br className="hidden md:block" /> saying about us
          </h2>
          <div className="w-full mt-0 md:mt-6">
            <p className={`${styles.paragraph} md:max-w-[450px] text-gradient`}>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row justify-start md:justify-center w-full feedback-contanier relative z-[1]">
          {feedback.map((card, index) => {
            return <FeedbackCard key={card.id} {...card} />;
          })}
        </div>
      </section>
    </>
  );
}
