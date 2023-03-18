import React, { useState } from "react";
import { stats } from "../../constants";
import styles from "../../../styles";

export default function Stats() {
  const [num, setnum] = useState({ value1: 0, value2: 0, value3: 0 });


  const updateCounter = (newValue, incr, value) => {
    setTimeout(() => {
      if (value === "value1" && num.value1 < newValue) {
        setnum((preValue) => {
          return { ...preValue, value1: num.value1 + incr };
        });
      } else if (value === "value2" && num.value2 < newValue) {
        setnum((preValue) => {
          return { ...preValue, value2: num.value2 + incr };
        });
      } else if (value === "value3" && num.value3 < newValue) {
        setnum((preValue) => {
          return { ...preValue, value3: num.value3 + incr };
        });
      } else {
        if (value === "value1") {
          setnum((preValue) => {
            return { ...preValue, value1: newValue };
          });
        }
        else if (value === "value2") {
          setnum((preValue) => {
            return { ...preValue, value2: newValue };
          });
        }
        if (value === "value3") {
          setnum((preValue) => {
            return { ...preValue, value3: newValue };
          });
        }
      }
    }, 20);
  };

  const changeNum = (value, index) => {
    if (index === 0) {
      let newValue = Number(value.slice(0, 4));

      let incr = Math.round(newValue / 100);
      updateCounter(newValue, incr, "value1");
    } else if (index === 1) {
      let newValue = Number(value.slice(0, 3));

      let incr = Math.round(newValue / 100);
      updateCounter(newValue, incr, "value2");
    }
    else if (index === 2) {
      let newValue = Number(value.slice(1, 4));

      let incr = Math.round(newValue / 100);
      updateCounter(newValue, incr, "value3");
    }
    else {
      return value;
    }
  };

  return (
    <>
      <section
        className={`${styles.flexCenter} flex flex-row flex-wrap mb-6 md:mb-20`}
      >
        {stats.map((stat, index) => {
          return (
            <div
              key={stat.id}
              className={`relative flex md:flex-1 flex-col md:flex-row justify-center md:justify-start items-center m-3 `}
            >
              <h4 className="font-poppins font-semibold text-[30px] md:text-[40px] leading-[43px] md:leading-[53px] counter">
                { changeNum(stat.value, index) }
                
                
                 {(index === 0)? num.value1 : (index === 1)? num.value2 : num.value3}
              </h4>
              <p className="font-poppins font-normal text-[15px] md:text-[20px] leading-[21px] md:leading-[26px] text-gradient uppercase m-3">
                {stat.title}
              </p>
              {index < stats.length - 1 && (
                <span className="absolute hidden md:inline-block right-0 w-[2px] h-[65%] border-r-2 border-l-blue-800"></span>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}
