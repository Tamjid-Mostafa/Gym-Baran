'use client';

import styles, { layout } from '@/styles'
import { fadeIn, FADE_IN_ANIMATION_SETTINGS, staggerContainer, textVariant } from '@/utils/motion';
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link';
import { FaChevronCircleRight } from 'react-icons/fa';
const Workout = () => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${layout.sectionReverse} justify-between`}>

            <motion.div
                variants={fadeIn('left', 'tween', 0.5, 1)} className={`-ml-16`}>
                <img className={`${layout.sectionImgReverse}`} src="/workout.png" alt="" />
            </motion.div>
            <motion.div
                variants={fadeIn('right', 'tween', 0.5, 1)}
                className={`${layout.sectionInfo} justify-center gap-[30px]`}
            >
                <div className={`${styles.heading2}`}>
                    Best full body workout to lose fat
                </div>
                <p>
                    Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.
                </p>
                <motion.div
                    variants={textVariant(0.8)}>
                    <Link href="">
                        <AnimatePresence>
                            <motion.button
                                className="px-[27px] py-[15px] rounded-[10px] border-none gym-shadow border border-secondary bg-secondary  text-white transition-all hover:bg-white hover:text-black w-[246px] flex justify-between items-center font-poppins font-normal text-base"
                                /* onClick={() => setShowSignInModal(true)} */
                                {...FADE_IN_ANIMATION_SETTINGS}
                            >
                                <span>Get Started</span>  <FaChevronCircleRight className='w-[26px] h-[26px]' />
                            </motion.button>
                        </AnimatePresence>
                    </Link>
                </motion.div>
            </motion.div>



        </motion.section>
    )
}

export default Workout