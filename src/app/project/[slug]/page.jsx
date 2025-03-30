import { portfolio } from "@/src/staticData/home/home";
import ClientPage from "./ClientPage";

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return portfolio?.projectsData?.map((project) => ({
    slug: project.slug,
  })) || [];
}

export default function SingleProject({ params }) {
  return <ClientPage params={params} />;
}
