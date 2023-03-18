import React from 'react'
import { card } from '../../assets';
import Button from '../Button/Button';
import styles, {layout} from '../../../styles';

export default function CardDeal() {
  return (
    <>
    <section className={`${layout.section}`} > 
      <div className=''>
        <h2 className={`${styles.heading2} md:mt-10`}>Find a better card deal <br className="hidden md:block"/> in few easy steps.</h2>
          <p className={`${styles.paragraph} md:max-w-[500px]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
          <Button styles={"mt-10"}/>
      </div>  
      <div className={`${layout.sectionImg} image__hover`}> 
      <img src={card} alt="card"  className='w-[100%] h-[100%] '/>
      </div>
    </section>
    </>
  )
}
