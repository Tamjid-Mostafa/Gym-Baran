import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Navbar } from '@/components';
import Hero from '@/sections/Hero';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    
  </div>
);

export default Page;