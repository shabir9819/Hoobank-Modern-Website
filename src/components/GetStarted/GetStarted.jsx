import React from 'react'
import styles from '../../../styles'
import { arrowUp } from '../../assets'


export default function GetStarted() {
  return (
    <>
    <div className={`${styles.flexCenter} justify-center relative w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer getStarted`}>
        <div className={`${styles.flexCenter} flex flex-col w-full h-full bg-primary rounded-full`}>
            <div className={`${styles.flexStart}  text-white capitalize `}>
              <p className=' font-poppins font-medium text-[18px] text-gradient mr-1'>  
              <span>Get </span> 
              </p>
              <img src={arrowUp} alt="arrowUp" className='w-[23px] h-[23px] object-contain'/>
               </div>
            <div className={`${styles.flexStart}  text-white capitalize `}>
              <p className=' font-poppins font-medium text-[18px] text-gradient mr-1'>  
              <span>started </span> 
              </p>
               </div>
            
        </div>
    </div>  
    </>
  )
}
