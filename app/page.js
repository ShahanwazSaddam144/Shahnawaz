import Navbar from '@/components/Navbar';
import Home_ from '@/components/Home';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Facts from '@/components/Facts';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='bg-gray-200'>
      <Navbar/>
      <Home_/>
      <Skills/>
      <Projects/>
      <About/>
      <Facts/>
      <Journey/>
      <Contact/>
      <Footer/>
    </div>
  );
}
