import React from 'react';
import { clients } from '../../constants';
import styles from '../../../styles';

export default function Clients() {
  return (
    <>
    <section className={`${styles.flexCenter} my-6`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client,index)=>{
          return <div key={client.id} className={`flex-1 ${styles.flexCenter} min-w-[120px] md:min-w-[192px] my-2 client`}>
            <img src={client.logo} alt="client"  className='w-[100px] md:w-[192px] object-contain'/>
          </div>
        })}
      </div>
    </section>
    </>
  )
}
