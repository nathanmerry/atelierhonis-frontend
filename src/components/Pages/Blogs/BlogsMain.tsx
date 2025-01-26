"use client";

import Image from "next/image";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { useI18n } from "@/hooks/useI18n";
import styled from "styled-components";
import BlogItem, { BlogItemDataType } from "./BlogItem";
import FeaturedBlogs from "./FeaturedBlogs";
import { BlogsMainContainer, BlogsPagination } from "./styles";
import { useEffect, useState } from "react";
import { fetchBlogs } from "@/lib/api";
import useTranslation from "next-translate/useTranslation";
import { i18nConfig } from "../../../../i18n";
import SeoHead from "@/components/Layouts/SeoHead";
import { Fade } from "react-awesome-reveal";
import { languageDetector } from "@/lib/languageDetector";
import { usePathname } from "next/navigation";
import { ContactBtn } from "../Home/FurnitureTimeline";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

const BlogsMain: React.FC = () => {
  const { t } = useI18n();
  const pathname = usePathname();
  const { redirect } = useRouteRedirect();
  const detectedLng = languageDetector.detect();
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pageSize: 10,
    pageCount: 1,
    total: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBlogs();
        const blogsData = response.data;

        // Normalize the detectedLng to match the database values
        const normalizedLang = detectedLng === "ro" ? "rom" : detectedLng; // Map 'ro' to 'rom'

        // Filter the blogs based on the normalized language
        const filteredBlogs = blogsData.filter(
          (blog: any) => blog.lang === normalizedLang
        );

        // Separate the featured blogs and regular blogs
        const featuredBlogs = filteredBlogs.filter(
          (blog: any) => blog.is_featured === 1
        );
        const regularBlogs = filteredBlogs.filter(
          (blog: any) => blog.is_featured === 0
        );

        setBlogs(regularBlogs);
        setFeaturedBlogs(featuredBlogs);

        setPagination({
          page: response.current_page,
          pageSize: response.per_page,
          pageCount: response.last_page,
          total: response.total,
        });

        console.log("Blogs data:", response);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, [pagination.page, detectedLng]);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > pagination.pageCount) return;
    setPagination((prevPagination) => ({
      ...prevPagination,
      page: newPage,
    }));
  };

  return (
    <ContainerMain>
      <SeoHead
        title="Bloguri - ATELIER HONIS"
        description="Citiți ultimele bloguri de pe ATELIER HONIS despre mobilier la comandă, design personalizat, și cele mai noi tendințe în amenajarea casei."
        keywords="blog mobilier, design interior, mobilier personalizat, tendințe mobilier, ATELIER HONIS"
        ogImage="/Images/About/AboutHonisBanner.png"
        twitterImage="/Images/About/AboutHonisBanner.png"
      />

      <Fade direction="down">
        <ContactBtn
          onClick={() => redirect("/contact-us")}
          style={{ cursor: "pointer", margin: "auto" }}
        >
          {t("FurnitureToOrder.contactBtn")}
        </ContactBtn>
      </Fade>

      <BlogsMainContainer>
        <Fade direction="left">
          <h1 className="main_heading">
            Ultimul <span>Post</span>
          </h1>
        </Fade>

        <div className="blogs_grid">
          <div className="blogs_list">
            {blogs.map((item: any, index: number) => (
              <BlogItem
                image={item.thumbnail}
                heading={item.title}
                description={item.description}
                link={`/blog-detail/${item.id}`}
                tag={item.category}
                key={index}
              />
            ))}
          </div>
          <div className="featured_list">
            <FeaturedBlogs data={featuredBlogs} />
          </div>
        </div>

        {/* Pagination Controls */}
        <Fade direction="up">
          <BlogsPagination>
            <button
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page <= 1}
            >
              Previous
            </button>
            <span>
              Page {pagination.page} of {pagination.pageCount}
            </span>
            <button
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={pagination.page >= pagination.pageCount}
            >
              Next
            </button>
          </BlogsPagination>
        </Fade>
      </BlogsMainContainer>
    </ContainerMain>
  );
};

export default BlogsMain;
