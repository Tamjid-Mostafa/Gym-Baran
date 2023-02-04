import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
const Brand = () => {
  return (
    <motion.div className='max-w-[492px] my-6'>
      <div className='mb-3 text-secondary'>Brand:</div>
      <div className='flex justify-between items-center'>
        <motion.img variants={fadeIn('bottom','tween', 0.5, 1)} className='w-fit' src="/nike.png" alt="" />
        <motion.img variants={fadeIn('bottom','tween', 1, 1)} className='w-fit' src="/adidas.png" alt="" />
        <motion.img variants={fadeIn('bottom','tween', 1.5, 1)} className='w-fit' src="/puma.png" alt="" />
        <motion.img variants={fadeIn('bottom','tween', 2, 1)} className='w-fit' src="/reebok.png" alt="" />
      </div>
    </motion.div>

  )
}

export default Brand