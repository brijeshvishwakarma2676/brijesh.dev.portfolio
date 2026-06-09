import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import Contact from '../components/sections/Contact';
// import ProjectPlanner from '../components/sections/ProjectPlanner';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact — Brijesh</title>
        <meta name="description" content="Get in touch to discuss your next project. I respond to all inquiries within 24 hours." />
      </Helmet>

      <PageHeader
        label="Contact"
        title="Let's Discuss Your Project"
        description="Have an idea or a business challenge? I'd be happy to talk through how I can help."
      />

      <Contact />
      {/* <ProjectPlanner /> */}
    </>
  );
}
