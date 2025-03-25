import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import SeoHead from "@/components/Layouts/SeoHead";
import { fetchBlog } from "@/lib/api";
import { useI18n } from "@/hooks/useI18n";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";
import { BlogDetailContainer, BlogDetailPage, FeaturedImage } from "./styles";

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

// Styled Back Button
const BackButton = styled(Link)`
  display: block;
  padding: 0.5rem 1.5rem;
  border-radius: 2.3125rem;
  background: #ff6f00;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 122.176%;
  text-transform: capitalize;
  text-align: center;
  text-decoration: none;
  transition: background 0.3s ease;
  cursor: pointer;
  width: fit-content;
  margin-top: 1.5rem;

  &:hover {
    background: #e65c00; /* Slightly darker on hover */
  }
`;

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Extracts the `id` from the URL
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { t, lang } = useI18n();
  const { redirect } = useRouteRedirect();

  useEffect(() => {
    if (id) {
      const blogId = Array.isArray(id) ? id[0] : id;

      const getBlogDetail = async () => {
        try {
          const blogData = await fetchBlog(lang,blogId);
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
  }, [id]);

  if (loading) return null;
  if (!blog) return null;

  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}storage/uploads/blogs/${blog.thumbnail}`;
  const Backend_Base_Url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
  const page = sessionStorage.getItem('blogPage') || '1';

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
          src={imageUrl}
          alt="BackgroundBanner"
          height={620}
          width={1440}
          className="image_banner"
        />
        <h1 className="main_title">{blog.title}</h1>
        <p className="category">{blog.category}</p>
        <div
          className="content_container"
          dangerouslySetInnerHTML={{
            __html: blog.content.replace(
              /<p[^>]*data-f-id="pbf"[^>]*>.*?<a href="https:\/\/www\.froala\.com\/wysiwyg-editor\?pb=1"[^>]*>Froala Editor<\/a><\/p>/gi,
              ""
            ),
          }}
        />


        {/* Back Button */
         }
        <br/>
        <Fade triggerOnce={true} delay={40} direction="right">
          <BackButton href={(page!='1')?`/${lang}/blogs?page=`+page:`/${lang}/blogs`} onClick={() => (page)?redirect("/blogs/?page="+page):redirect("/blogs")}>
            {t("BlogBanner.back")}
          </BackButton>
        </Fade>
      </BlogDetailPage>
    </BlogDetailContainer>
  );
};

export default BlogDetail;
