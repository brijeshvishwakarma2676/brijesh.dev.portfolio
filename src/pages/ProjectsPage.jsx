import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import Projects from '../components/sections/Projects';
import CaseStudies from '../components/sections/CaseStudies';

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects — Brijesh</title>
        <meta name="description" content="Explore my portfolio of websites, React applications, APIs, automation tools, and SaaS products built for real businesses." />
      </Helmet>

      <PageHeader
        label="Portfolio"
        title="Projects & Case Studies"
        description="A curated selection of work spanning websites, web applications, APIs, and automation systems — each solving a real business problem."
      />

      <Projects />
      <CaseStudies />
    </>
  );
}
