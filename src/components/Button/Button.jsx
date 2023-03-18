import React from "react";

export default function Button({styles}) {
  return (
    <>
      <button
        type="button"
        className={`${styles} py-4 px-6 bg-blue-gradient rounded-[10px] capitalize text-primary outline-none text-[18px font-poppins font-medium relative`}
        id="getstarted__btn"
      >
        {" "}
        get started
      </button>
    </>
  );
}
