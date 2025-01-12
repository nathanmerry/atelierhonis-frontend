import BlogDetail from "@/components/Pages/Blogs/BlogDetail";
import dynamic from "next/dynamic";

const DefaultLayout = dynamic(
  () => import("@/components/Layouts/DefaultLayout"),
  { ssr: false }
);

const BlogDetailPage = () => {
  return (
    <DefaultLayout>
      <BlogDetail />
    </DefaultLayout>
  );
};

export default BlogDetailPage;
