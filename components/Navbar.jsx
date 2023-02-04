'use client';

import useScrollPosition from '@/lib/hooks/useScroll';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { fadeIn, FADE_IN_ANIMATION_SETTINGS } from '../utils/motion';

const Navbar = () => {
  const scrolled = useScrollPosition(50);
  const { SignInModal, setShowSignInModal } = useState();

  return (

    <nav className=''>
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
            <p><span className='bg-primary rounded-xl text-white px-2 py-1 gym-shadow'>Gym</span> baran</p>
          </Link>
          <div>
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

          </div>
        </div>
      </motion.nav>
    </nav>
  );
}

export default Navbar;
