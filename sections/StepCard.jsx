'use client';

import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'
import styles from '@/styles';
import { FaArrowRight } from 'react-icons/fa';

const StepCard = () => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}>
            <motion.div
                variants={fadeIn('bottom','tween', 0.2, 1)} className={`${styles.topMargin} step-card-gradient  rounded-[30px]`}>
                <div
                    className=' flex md:flex-row flex-col justify-between items-center gap-[52px] md:gap-[80px] p-[28px] md:p-[85px]'>
                    <div className='flex'>
                        <div className=''>
                            <img className='w-fit bg-white bg-opacity-10 rounded-[20px] p-[30px] backdrop-blur-[32px]' src='/man1.png' alt="img" />
                        </div>
                        <div className='ml-[30px] flex flex-col justify-between '>
                            <h2 className='max-w-[170px] font-bold font-poppins  text-[20px] leading-[28px] tracking-[0.01em] text-white '>Get that 11 line in 30 days</h2>
                            <div className='flex gap-[16px] text-[16px] justify-between items-center font-poppins font-normal leading-[28px] tracking-[0.01em] text-white'>
                                <span>Learn more</span>
                                <span><FaArrowRight /></span>
                            </div>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className=''>
                            <img className='w-fit bg-white bg-opacity-10 rounded-[20px] p-[30px] backdrop-blur-[32px]' src='/man1.png' alt="img" />
                        </div>
                        <div className='ml-[30px] flex flex-col justify-between '>
                            <h2 className='max-w-[170px] font-bold font-poppins  text-[20px] leading-[28px] tracking-[0.01em] text-white '>Get that 11 line in 30 days</h2>
                            <div className='flex gap-[16px] text-[16px] justify-between items-center font-poppins font-normal leading-[28px] tracking-[0.01em] text-white'>
                                <span>Learn more</span>
                                <span><FaArrowRight /></span>
                            </div>
                        </div>
                    </div>
                    <div className='flex  '>
                        <div className=''>
                            <img className='w-fit bg-white bg-opacity-10 rounded-[20px] p-[30px] backdrop-blur-[32px]' src='/man1.png' alt="img" />
                        </div>
                        <div className='ml-[30px] flex flex-col justify-between '>
                            <h2 className='max-w-[170px] font-bold font-poppins  text-[20px] leading-[28px] tracking-[0.01em] text-white '>Get that 11 line in 30 days</h2>
                            <div className='flex gap-[16px] text-[16px] justify-between items-center font-poppins font-normal leading-[28px] tracking-[0.01em] text-white'>
                                <span>Learn more</span>
                                <span><FaArrowRight /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default StepCard