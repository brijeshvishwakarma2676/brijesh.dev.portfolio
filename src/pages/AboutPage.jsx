import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Process from '../components/sections/Process';
import FAQ from '../components/sections/FAQ';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — Brijesh</title>
        <meta name="description" content="Learn about my engineering philosophy, technical skills, development process, and approach to building reliable software." />
      </Helmet>

      <PageHeader
        label="About"
        title="A Bit About Me"
        description="My background, how I work, and what I value as a software engineer."
      />

      <About />
      <Skills />
      <Process />
      <FAQ />
    </>
  );
}
