import React from "react";
import { apple, bill, google } from "../../assets";
import styles, { layout } from "../../../styles";

export default function Billing() {
  return (
    <>
      <section
        id="product"
        className={`${layout.sectionReverse} md:flex-row flex-col-reverse relative`}
      >
        <div className={`${layout.sectionImg} image__hover`}>
          <img src={bill} alt="bill" className="w-[100%] h-[100%] z-[5] " />
        </div>
        <div className="absolute z-[3] w-[100%] h-[15%] white__gradient top-0 -left-1/2 rounded-full"></div>
        <div className="absolute z-[3] w-[100%] h-[50%] pink__gradient bottom-0 -left-1/2  rounded-full"></div>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2}`}>
            Easily control your <br className="hidden md:block"/> billing & invoicing.
          </h2>
          <p className={`${styles.paragraph} md:max-w-[470px mt-5]`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex flex-row flex-wrap mt-6 md:mt-10">
            <img
              src={apple}
              alt="apple__store"
              className="w-[108px] h-[42px] object-contain mr-5  cursor-pointer"
            />
            <img
              src={google}
              alt="google__store"
              className="w-[108px] h-[42px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </section>
    </>
  );
}
