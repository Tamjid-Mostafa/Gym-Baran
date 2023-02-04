import Image from 'next/image'
import { Navbar } from '@/components';
import { Healthy, Hero, StepCard, Workout } from '@/sections';
import styles from '@/styles';


const Page = () => (
  <div className="overflow-hidden">

    <Navbar />
    <div className={`max-w-screen-xl ${styles.yPaddings} mx-5 xl:mx-auto`}>
    <Hero />
    <Healthy />
    <StepCard />
    <Workout />
    </div>
  </div>
);

export default Page;