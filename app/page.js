import Image from 'next/image'
import { Navbar } from '@/components';
import Hero from '@/sections/Hero';

const Page = () => (
  <div className="overflow-hidden">
    <Navbar />
    <Hero />
    
  </div>
);

export default Page;