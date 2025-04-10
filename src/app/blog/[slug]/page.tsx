import { blogs } from "@/src/staticData/home/home";
import ClientPage from "./ClientPage";

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return blogs?.blogsData?.map((blog) => ({
    slug: blog.slug,
  })) || [];
}

export default function SingleBlog({ params }) {
  return <ClientPage params={params} />;
}
