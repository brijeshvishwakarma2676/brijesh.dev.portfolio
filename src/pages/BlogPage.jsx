import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import Blog from '../components/sections/Blog';

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog — Brijesh</title>
        <meta name="description" content="Articles on React development, API design, frontend engineering, performance optimization, and lessons from building software." />
      </Helmet>

      <PageHeader
        label="Blog"
        title="Writing & Thinking"
        description="Articles on frontend engineering, architecture decisions, and lessons learned from building software."
      />

      <Blog />
    </>
  );
}
