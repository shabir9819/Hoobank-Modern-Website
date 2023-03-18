import React from "react";
import styles, { layout } from "../../../styles";
import { features } from "../../constants";
import Button from "../Button/Button";
// import { star } from '../../assets';

const Features = ({ title, icon, content, index }) => {
  return (
    <>
    <div className={`cursor-pointer flex flex-row rounded-[20px] p-6 ${(index < features.length - 1) ? "mb-2" : "mb-0"} feature-card `}>
      <img src={icon} alt="icon" className="w-[64px] h-[64px] object-contain"/>
      
    <div className="flex flex-1 flex-col ml-3 w-full">
      <h4 className=" font-poppins font-semibold  text-white text-[18px] leading-[23px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
    </div>
    </>
  );
};
 const Business = () =>{
  return (
    <>
      <section id="features" className={layout.section} >
        <div className={`${layout.sectionInfo}`}>
          <h2
            className={`${styles.heading2} text-[40px] md:text-[48px]  text-white md:leading-[76.8px] leading-[66.8px] `}
          >
            You do the business,
            <br className="hidden md:block" /> we’ll handle the money.
          </h2>
          <p className={`${styles.paragraph} md:max-w-[520px]`}>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <Button styles="mt-10" />
        </div>
        <div className={`${layout.sectionImg}  flex-col  `}>
          {features.map((feature, index) => {
            return <Features key={feature.id} {...feature} index={index} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Business;
