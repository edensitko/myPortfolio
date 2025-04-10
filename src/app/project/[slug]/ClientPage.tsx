"use client";

import { useEffect, useState } from "react";
import ProjectDescription from "@/src/components/project/ProjectDescription";
import ProjectHero from "@/src/components/project/ProjectHero";
import Layout from "@/layout/Layout";
import { portfolio } from "@/src/staticData/home/home";
import Footer from "@/src/components/shared/Footer";

interface Project {
  id: number;
  image: {
    thumbnail: string;
    image: string;
    thumbnailText1?: string;
    thumbnailText2?: string;
  };
  title: string;
  subtitle?: string;
  slug: string;
  category?: string;
  description?: string;
  technologies?: string[];
  type?: string;
  projectHeading?: any;
  projectInfo?: any[];
  projectDescription?: any;
  details?: {
    client: string;
    date: string;
    service: string;
    website: string;
  };
}

export default function ClientPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  useEffect(() => {
    const foundProject = portfolio?.projectsData?.find(
      (project) => project?.slug === params?.slug
    );
    setProject(foundProject || null);
  }, [params?.slug]);

  return (
    <Layout>
      <div
        className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
        id="portfolio"
      >
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <ProjectHero project={project} />
          <ProjectDescription project={project} />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
