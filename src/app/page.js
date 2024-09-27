import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import { Sparkle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className=' p-2 text-4xl hidden lg:flex mt-6 justify-around bg-[#2563EB] text-white'>
        {/* Apply tilt effect using transform */}
        <div className='flex w-full rounded-lg items-center p-3 text-4xl justify-around bg-[#101931] text-white transform rotate-[-1deg]'>
          <h1>i Design</h1>
          <Sparkle />
          <h1>i Develop</h1>
          <Sparkle />
          <h1>i Secure</h1>
          <Sparkle />
          <h1>i Pentest</h1>
        </div>
      </div>
      <main>
        <About />
        <Projects />
      </main>
    </>
  );
}
