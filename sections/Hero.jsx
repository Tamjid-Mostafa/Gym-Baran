'use client';

import { TitleText } from '@/components/CustomTexts';
import styles from '@/styles';
import { fadeIn, planetVariants, staggerContainer, textVariant } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <div className='text-accent leading-[73px] font-bold text-[56px] sporting-grotesque'>
        Healthy in side <span className='text-primary'>fresh</span> out side
        </div>
          <motion.div
          variants={textVariant(0.7)} className={`${styles.paragraph} max-w-[492px] my-5 font-normal text-[16px] leading-7 tracking-[0.01em]`}>
            Build your Fron-End Web Application. Get work done quicker by
            building out entire projects. Isolating code to test features and
            animations. Want to keep it all under wraps?
          </motion.div>
          <motion.div
          variants={textVariant(0.8)}>
          <Link href="/code-editor">
            <button>
              Start Coding {/* <FaArrowRight className="ml-2"></FaArrowRight>{" "} */}
            </button>
          </Link>
          </motion.div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/heroImg.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
