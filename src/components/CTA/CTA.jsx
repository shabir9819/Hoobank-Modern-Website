import React from 'react'
import styles from '../../../styles'
import Button from '../Button/Button'

export default function CTA() {
  return (
    <>
    <section id='cta' className={` ${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col md:flex-row  bg-black-gradient-2 rounded-[20px] box-shadow sm:p-14 md:py-24 try__zoom`} >
      <div >
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} text-gradient`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div>
        <Button styles={"m-5"}/>
      </div>
    </section>
    </>
  )
}
