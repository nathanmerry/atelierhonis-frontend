import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SeoHead from "@/components/Layouts/SeoHead";
import { fetchBlog } from "@/lib/api";
import { useI18n } from "@/hooks/useI18n";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";
import { BlogDetailContainer, BlogDetailPage, FeaturedImage } from "./styles";
import { Blog } from "@/types/blog";

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

// Styled Image Carousel Container
const ImageCarousel = styled.div`
  margin: 2rem 0;

  .image-carousel {
    padding: 0;

    .swiper-slide {
      height: auto;
      width: 100% !important;
    }

    .carousel_image {
      width: 100%;
      height: 620px;
      border-radius: 1rem;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: #ff6f00;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-top: -20px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);

      &:after {
        font-size: 16px;
        font-weight: bold;
      }

      &:hover {
        background: rgba(255, 255, 255, 1);
        transform: scale(1.1);
      }
    }

    .swiper-pagination {
      bottom: -40px;

      .swiper-pagination-bullet {
        background: #ccc;
        opacity: 0.7;

        &.swiper-pagination-bullet-active {
          background: #ff6f00;
          opacity: 1;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 0;

    .image-carousel {
      padding: 0 0.5rem;

      .swiper-button-next,
      .swiper-button-prev {
        width: 35px;
        height: 35px;
        margin-top: -17.5px;

        &:after {
          font-size: 14px;
        }
      }
    }
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
          const blogData = await fetchBlog(lang, blogId);
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
  const ogImageUrl = `${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}storage/uploads/blogs/${blog.og_image}`;
  const Backend_Base_Url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
  const page = sessionStorage.getItem("blogPage") || "1";

  console.log(imageUrl, blog.additional_thumbnails);
  return (
    <BlogDetailContainer>
      <SeoHead
        metaTitle={blog.meta_title || blog.title}
        description={blog.description}
        keywords={`"${blog.tags}"`}
        canonicalUrl={blog.canonical_url}
        robots={blog.robots_directives}
        ogTitle={blog.og_title || blog.meta_title || blog.title}
        ogImage={ogImageUrl || imageUrl}
        twitterCard={blog.twitter_card}
        twitterImage={blog.twitter_image || imageUrl}
        metaHead={blog.meta_head}
      />

      <BlogDetailPage>
        {blog.additional_thumbnails?.length > 0 ? (
          <ImageCarousel>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="image-carousel"
            >
              {[blog.thumbnail, ...blog.additional_thumbnails].map(
                (thumbnail, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="carousel_image"
                      style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}storage/uploads/blogs/${thumbnail})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '620px',
                        width: '100%'
                      }}
                      role="img"
                      aria-label={`Additional Image ${index + 1}`}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </ImageCarousel>
        ) : (
          <FeaturedImage
            src={imageUrl}
            alt="BackgroundBanner"
            height={620}
            width={1440}
            className="image_banner"
          />
        )}
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

        {/* Back Button */}
        <br />
        <Fade triggerOnce={true} delay={40} direction="right">
          <BackButton
            href={
              page != "1"
                ? `/${lang}/blogs?page=` + page + `#blog${blog.id}`
                : `/${lang}/blogs#blog${blog.id}`
            }
            onClick={() =>
              page
                ? redirect("/blogs/?page=" + page + "#blog" + blog.id)
                : redirect("/blogs#blog" + blog.id)
            }
          >
            {t("BlogBanner.back")}
          </BackButton>
        </Fade>
      </BlogDetailPage>
    </BlogDetailContainer>
  );
};

export default BlogDetail;
