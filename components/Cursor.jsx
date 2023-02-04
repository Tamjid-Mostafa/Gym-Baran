import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'
import { useEffect } from 'react';

const Cursor = (props) => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = {
        damping: 35,
        stiffness: 700,
        mass: 1
    };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };

    }, []);

    return (
        <motion.div

            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            className="md:block hidden fixed z-[99999] w-0 h-0 bg-primary">
            {!props.hideCursor == true ?
                <motion.div layoutId="cursor" className="absolute w-4 h-4 -top-2 -left-2 bg-primary pointer-events-none rounded-full">
                </motion.div>
                :
                null
            }
        </motion.div>
    )
}

export default Cursor;