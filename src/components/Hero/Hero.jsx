import React from "react";
import styles from "../../../styles";
import { robot, discount } from "../../assets";
import GetStarted from "../GetStarted/GetStarted";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className={`flex items-center flex-col md:flex-row ${styles.paddingY} `}
      >
        <div
          className={`flex-1 flex-col flex justify-center items-start xl:px-0 px-16 md:px-0 `}
        >
          <div
            className={`flex flex-row items-center py-[6px] px-6 bg-discount-gradient rounded-[10px] mb-2`}
          >
            <img
              src={discount}
              alt="discount"
              className={`w-[32px] h-[32px]`}
            />
            <p className={`${styles.paragraph} ml-2 uppercase text-dimWhite`}>
              <span className="mr-1 text-white ">20% </span>Discount for
              <span className="mx-1 text-white"> 1 Month</span> account
            </p>
          </div>
          <div className="flex justify-between items-center ">
            <h1 className=" font-poppins font-semibold flex-1 md:text-[72px] text-[35px] text-white leading-[50px] md:leading-[100px]">
              The Next
              <br className="hidden md:block" />
              <span className="text-gradient">Generation</span>
            </h1>
            <div className="hidden md:flex md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <h1 className=" font-poppins font-semibold flex-1 md:text-[72px] text-[35px] text-white leading-[50px] md:leading-[100px] capitalize">
            payment method.
          </h1>
          <p
            className={`${styles.paragraph} max-w-[483px] mt-5 text-dimWhite`}
          >
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className={`relative flex-1 flex ${styles.flexCenter} my-10 md:my-0`}>
          <img src={robot} alt="billing" className="w-[100%] h-[100%] z-[5] image__hover" />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient left-[50%]"></div>
          <div className="absolute z-[1] w-[80%] h-[80%] bottom-40  white__gradient rounded-full"></div>
          <div className="absolute z-[0] w-[40%] h-[35%] bottom-20 right-20 blue__gradient left-[50%]"></div>
        </div>
        <div className="md:hidden">
          <GetStarted/>
        </div>
      </section>
    </>
  );
}
