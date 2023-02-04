'use client';

import styles, { layout } from '@/styles'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'

const Healthy = () => {
    return (
        <section className={``}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${layout.section}`}
            >
                <motion.div
                    variants={fadeIn('right', 'tween', 0.5, 1)}
                    className={`${layout.sectionInfo}`}
                >
                    <div className={`${styles.heading2}`}>
                        Healthy in side fresh out side
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 'tween', 0.5, 1)}
                    className={`${layout.sectionImg} ${styles.flexCenter} ${styles.paragraph}`}
                >
                    <p>
                        Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day
                    </p>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Healthy