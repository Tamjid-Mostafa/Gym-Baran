'use client';
import Cursor from '@/components/Cursor'
import { motion } from 'framer-motion'
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [magnetActive, setMagnetActive] = useState(false)
    return (
        <div>
            <Cursor hideCursor={magnetActive} />
            <div className=" bg-zinc-900 text-zinc-300">
                <header className="absolute inset-x-0 top-0 flex items-center justify-between px-[5%] py-4 lg:py-12 z-[999]">
                    <div className="font-bold text-xl text-zinc-50">SiteLogo</div>
                    <button
                        className={`relative w-14 h-14 bg-zinc-800/30 hover:bg-zinc-800/80 rounded-full flex flex-col items-center transition-all duration-300 justify-center ${!isMenuOpen ? "gap-y-1" : ""}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        onPointerEnter={() => setMagnetActive(true)}
                        onPointerLeave={() => setMagnetActive(false)}
                    >
                        <span className={`h-[2px] transition-all duration-300 bg-zinc-300 z-[10] ${!isMenuOpen ? "w-7" : "w-6 mb-[-1px] rotate-45"}`}></span>
                        <span className={`h-[2px] transition-all duration-300 bg-zinc-300 z-[10] ${!isMenuOpen ? "w-7" : "w-6 mt-[-1px] -rotate-45"}`}></span>
                        {magnetActive ?
                            <motion.div layoutId="cursor" className="absolute inset-0 bg-red-500 rounded-full"></motion.div> : null
                        }
                    </button>
                    <motion.nav
                        transition={{
                            type: "spring",
                            damping: 100,
                            stiffness: 500,
                        }}
                        initial={{
                            y: "-100%"
                        }}
                        animate={{
                            y: !isMenuOpen ? "-100%" : "0%"
                        }}
                        className="fixed inset-0 bg-zinc-900/80 backdrop-blur z-[-1]">
                        <div className="flex px-[5%] flex-col justify-center h-full">
                            <a className="text-5xl" href="#">Menu Link</a>
                            <a className="text-5xl" href="#">Menu Link</a>
                            <a className="text-5xl" href="#">Menu Link</a>
                            <a className="text-5xl" href="#">Menu Link</a>
                        </div>
                    </motion.nav>
                </header>
                
            </div>
        </div>
    )
}

export default Header