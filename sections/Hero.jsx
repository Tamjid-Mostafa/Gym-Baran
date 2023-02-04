'use client';

import Brand from '@/components/Brand';
import styles from '@/styles';
import { fadeIn, FADE_IN_ANIMATION_SETTINGS, planetVariants, staggerContainer, textVariant } from '@/utils/motion';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { FaChevronCircleRight, FaPlayCircle } from 'react-icons/fa'
const Hero = () => (
    <section className={`mt-[85px]`} >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('bottom', 'tween', 0.2, 1)}
        className="flex-1 flex justify-center flex-col "
      >
        <div className='text-accent leading-[73px] font-bold text-[56px] sporting-grotesque'>
        Healthy in side <span className='text-primary'>fresh</span> out side
        </div>
          <motion.div
          variants={fadeIn('bottom','tween', 0.2, 1)} className={`${styles.paragraph} max-w-[492px] my-5 font-normal text-[16px] leading-7 tracking-[0.01em]`}>
            Build your Fron-End Web Application. Get work done quicker by
            building out entire projects. Isolating code to test features and
            animations. Want to keep it all under wraps?
          </motion.div>
          <div className={`max-w-[492px] my-5 flex justify-between`}>
          <motion.div
          variants={fadeIn('bottom','tween', 0.2, 1)}
          className=""
          >
          <Link href="">
          <AnimatePresence>
                <motion.button
                  className="px-[17px] sm:px-[27px] py-[14px] sm:py-[15px] rounded-[10px] border-none gym-shadow border border-secondary bg-secondary  text-white transition-all hover:bg-white hover:text-black sm:w-[246px] w-[176px] flex justify-between items-center font-poppins font-normal sm:text-base text-xs"
                  /* onClick={() => setShowSignInModal(true)} */
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                 <span>Get Started</span>  <FaChevronCircleRight className='sm:w-[26px] w-[12px] sm:h-[26px] h-[12px]' />
                </motion.button>
            </AnimatePresence>
          </Link>
          </motion.div>
          <motion.div
          variants={fadeIn('bottom','tween', 0.3, 1)}>
          <Link href="">
          <AnimatePresence>
          <motion.button
                  className="px-[17px] sm:px-[27px] py-[14px] sm:py-[15px] rounded-[10px] border-none gym-shadow border border-secondary bg-white  hover:text-white transition-all hover:bg-secondary text-secondary sm:w-[174px] w-[125px] flex justify-between items-center font-poppins font-normal sm:text-base text-xs"
                  /* onClick={() => setShowSignInModal(true)} */
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                 <FaPlayCircle className='sm:w-[26px] w-[12px] sm:h-[26px] h-[12px]' /> <span>Learn More</span>  
                </motion.button>
            </AnimatePresence>
          </Link>
          </motion.div>
          </div>
          <Brand />
      </motion.div>

      <motion.div
        variants={fadeIn('bottom', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/heroImg.png"
          alt="get-started"
          className="w-[100%] h-[100%] object-contain"
        />
      </motion.div>
      
    </motion.div>
  </section>
);

export default Hero;
