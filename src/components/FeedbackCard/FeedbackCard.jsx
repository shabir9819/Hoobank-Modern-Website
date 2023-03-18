import React from 'react'
import { quotes } from '../../assets'

export default function FeedbackCard({title,name,content,img}) {
  return (
    <>
    <div className='flex flex-wrap justify-between flex-col px-10 py-12 rounded-[20px] md:max-w-[370px] mr-5 md:mr-10 my-5 feature-card  '>
      <img src={quotes} alt="quotes" className='w-[42px] h-[27px] object-contain'/>
      <p className='font-poppins font-normal text-[18px] leading-[32px] w-full my-10'>{content}</p>
        <div className='flex flex-row'>
          <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full "/>
          <div className='flex flex-col ml-4'>
            <h4 className='font-poppins font-normal text-[20px] leading-[32px] '>{name}</h4>
            <p className='font-poppins font-normal text-[18px] leading-[24px] text-gradient'>{title}</p>
          </div>
        </div>
    </div>
    </>
  )
}
