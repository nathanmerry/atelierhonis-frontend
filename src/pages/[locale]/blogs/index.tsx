// import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";

const DefaultLayout = dynamic(
  () => import("@/components/Layouts/DefaultLayout"),
  { ssr: false }
);

const BlogsBanner = dynamic(
  () => import("@/components/Pages/Blogs/BlogsBanner"),
  { ssr: false }
);

const TipsBanner = dynamic(
  () => import("@/components/Pages/Blogs/TipsBanner"),
  { ssr: false }
);

const BlogsMain = dynamic(() => import("@/components/Pages/Blogs/BlogsMain"), {
  ssr: false,
});

const BlogsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <BlogsBanner />
      <TipsBanner />
      <BlogsMain />
    </DefaultLayout>
  );
};
export default BlogsPage;
