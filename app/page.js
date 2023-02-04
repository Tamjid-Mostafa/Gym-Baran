import Image from 'next/image'
import { Navbar } from '@/components';
import { Healthy, Hero } from '@/sections';


const Page = () => (
  <div className="overflow-hidden">
    <Navbar />
    <Hero />
    <Healthy />
    
  </div>
);

export default Page;