import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";

import { BlogDetailContainer, BlogDetailPage, FeaturedImage } from "./styles";
import styled from "styled-components";
import { fetchBlogDetailById, fetchBlogs } from "@/lib/api";
import SeoHead from "@/components/Layouts/SeoHead";
import { languageDetector } from "@/lib/languageDetector";
import locale from "antd/es/date-picker/locale/en_US";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  description: string | null;
  content: string;
  lang: string;
  is_featured: number;
  category: string;
  tags: string | null;
  thumbnail: string;
  created_at: string;
  updated_at: string;
}

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Extracts the `id` from the URL

  const [blog, setBlog] = useState<Blog | null>(null); // Typing the state
  const [loading, setLoading] = useState<boolean>(true); // Typing the loading state

  useEffect(() => {
    if (id) {
      const blogId = Array.isArray(id) ? id[0] : id; // Get the id value

      const getBlogDetail = async () => {
        try {
          const blogData = await fetchBlogs(blogId); // Fetch the blog data by id
          console.log("BlogDetail:", blogData);
          setBlog(blogData);
        } catch (error) {
          console.error("Error fetching blog details:", error);
        } finally {
          setLoading(false);
        }
      };

      getBlogDetail();
    }
  }, [id]); // Re-fetch if `id` changes

  if (loading) return null;
  if (!blog) return null;

  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}storage/uploads/blogs/${blog?.thumbnail}`;
  const Backend_Base_Url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  return (
    <BlogDetailContainer>
      <SeoHead
        title={`Blog - ${blog.title} | ATELIER HONIS`}
        description={blog.description || "No description available"}
        keywords="blog mobilier, design de interior, mobilier personalizat, soluții de mobilier"
        ogImage={`${Backend_Base_Url}/${imageUrl}`}
        twitterImage={`${Backend_Base_Url}/${imageUrl}`}
      />

      <BlogDetailPage>
        <FeaturedImage
          src={`${Backend_Base_Url}/${imageUrl}`}
          alt="BackgroundBanner"
          height={620}
          width={1440}
          className="image_banner"
        />
        <h1 className="main_title">{blog.title}</h1>
        <p className="category">{blog.category}</p>
        <div
          className="content_container"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </BlogDetailPage>
    </BlogDetailContainer>
  );
};

export default BlogDetail;
