import React from "react";
import styles from "../../../styles";
import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../../constants";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col w-full`}>
        <div
          className={`${styles.flexStart} md:items-center flex-col md:flex-row mb-8 w-full`}
        >
          <div className="flex-1 flex flex-col justify-start mr-10">
            <img
              src={logo}
              alt="logo"
              className={`w-[266px] h-[72px] object-contain `}
            />
            <p className={`${styles.paragraph} max-w-[312px] mt-4`}>
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          <div className=" flex-[1.5] flex flex-row flex-wrap justify-between mt-10 md:mt-0 w-full">
            {footerLinks.map((footerLink, index) => {
              return (
                <div
                  key={footerLink.title}
                  className={`flex flex-col my-0 md:my-4 min-w-[150px]`}
                >
                  <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mt-7 ">
                    {footerLink.title}
                  </h4>
                  <ul className="list-none mt-4">
                    {footerLink.links.map((link, index) => {
                      return (
                        <li key={link.name}
                          className={`${
                            index < footerLink.links.length - 1
                              ? "mb-4"
                              : "mb-0"
                          } font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                        >
                          {link.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font=poppins font-normal text-center text-[18px] leading-[27px] text-white">
            2021 HooBank. All Rights Reserved.
          </p>
          <div className="flex flex-row mt-6 md-mt-0">
            {socialMedia.map((social, index) => {
              return (
                <img
                  src={social.icon}
                  alt={social.id}
                  key={social.id}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer ${(index < socialMedia.length -1) ? "mr-6" : "mr-0"}`}
                />
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
}
