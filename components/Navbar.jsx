'use client';

import useScrollPosition from '@/lib/hooks/useScroll';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { fadeIn, FADE_IN_ANIMATION_SETTINGS } from '../utils/motion';
import Cursor from './Cursor';

const Navbar = () => {
  const scrolled = useScrollPosition(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [magnetActive, setMagnetActive] = useState(false)
  return (

    <nav className=''>
      <Cursor hideCursor={magnetActive} />
      <motion.nav
        variants={fadeIn('top', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className={`fixed top-0 w-full ${scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
          } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center text-[20px] leading-8 sporting-grotesque ">
            <p><span className='bg-primary rounded-xl text-white px-2 py-1 gym-shadow'>Gym</span><span className={`${!isMenuOpen ? "text-primary" : "text-white"}`}>{" "}baran</span></p>
          </Link>
          <>
            <ul className="items-center justify-center space-y-8 md:flex hidden space-x-0 md:space-x-5 lg:space-x-10 text-[16px] md:space-y-0 font-poppins">
              <li className="text-black">
                <Link href="/">Home</Link>
              </li>
              <li className="text-black">
                <Link href="/program">Program</Link>
              </li>
              <li className="text-black">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="text-black">
                <Link href="/aboutus">About Us</Link>
              </li>
              <AnimatePresence>
                <motion.button
                  className="px-[32px] py-[13px] rounded-[10px] border-none gym-shadow border border-secondary bg-secondary  text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowSignInModal(true)}
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  Log in
                </motion.button>
              </AnimatePresence>
            </ul>

          </>
          <div className="md:hidden block items-center">
            <button
              className={`relative w-14 h-14 bg-indigo-800/30 hover:bg-indigo-800/80 rounded-full flex flex-col items-center transition-all duration-300 justify-center ${!isMenuOpen ? "gap-y-1" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`h-[2px] transition-all duration-300 bg-zinc-300 z-[10] ${!isMenuOpen ? "w-7" : "w-6 mb-[-1px] rotate-45"}`}></span>
              <span className={`h-[2px] transition-all duration-300 bg-zinc-300 z-[10] ${!isMenuOpen ? "w-7" : "w-6 mt-[-1px] -rotate-45"}`}></span>
              {magnetActive ?
                <motion.div layoutId="cursor" className="absolute inset-0 bg-primary rounded-full"></motion.div> : null
              }
            </button>

            {/*  <div
              className={`${!toggle ? "hidden" : "flex"
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            > */}

            <motion.nav
              transition={{
                type: "spring",
                damping: 100,
                stiffness: 500,
              }}
              initial={{
                y: "-350%"
              }}
              animate={{
                y: !isMenuOpen ? "-350%" : "0%"
              }}
              className="fixed inset-0 bg-zinc-900/80 backdrop-blur z-[-1]">

              <>
                <ul className="list-none md:hidden flex gap-10 flex-col justify-center items-center w-full h-full font-poppins">
                  <li className="text-white">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="text-white">
                    <Link href="/program">Program</Link>
                  </li>
                  <li className="text-white">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="text-white">
                    <Link href="/aboutus">About Us</Link>
                  </li>
                  <AnimatePresence>
                    <motion.button
                      className="px-[32px] py-[13px] rounded-[10px] border-none gym-shadow border border-secondary bg-secondary  text-white transition-all hover:bg-white hover:text-black"
                      onClick={() => setShowSignInModal(true)}
                      {...FADE_IN_ANIMATION_SETTINGS}
                    >
                      Log in
                    </motion.button>
                  </AnimatePresence>
                </ul>

              </>
            </motion.nav>
            {/* 
            </div> */}
          </div>
        </div>
      </motion.nav>
    </nav>
  );
}

export default Navbar;
