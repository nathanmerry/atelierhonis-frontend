"use client";

import Image from "next/image";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { useI18n } from "@/hooks/useI18n";
import styled from "styled-components";
import BlogItem, { BlogItemDataType } from "./BlogItem";
import FeaturedBlogs from "./FeaturedBlogs";
import { BlogsMainContainer, BlogsPagination } from "./styles";
import { useEffect, useState } from "react";
import { fetchBlogs,fetchFeatureBlogs,searchBlogs } from "@/lib/api";
import useTranslation from "next-translate/useTranslation";
import { i18nConfig } from "../../../../i18n";
import SeoHead from "@/components/Layouts/SeoHead";
import { Fade } from "react-awesome-reveal";
import { languageDetector } from "@/lib/languageDetector";
import { usePathname } from "next/navigation";
import { ContactBtn } from "../Home/FurnitureTimeline";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";
import { useRouter } from 'next/router';
import Link from "next/link";
import { Button, Input } from "antd";
import { FeaturedBlogsWrapper } from "./styles";

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

const BlogsMain: React.FC = () => {

  const router = useRouter();
  const { t,lang } = useI18n();
  const pathname = usePathname();
  const { redirect } = useRouteRedirect();
  const detectedLng = languageDetector.detect();
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pageSize: 10,
    pageCount: 1,
    total: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        var page=pagination.page;
        const pageNo = router.query.page || page;
        const response = await fetchBlogs(detectedLng,parseInt(pageNo.toString()));
        const blogsData = response.data;
       

        // Normalize the detectedLng to match the database values
        const normalizedLang = detectedLng === "ro" ? "rom" : detectedLng; // Map 'ro' to 'rom'

        // Filter the blogs based on the normalized language
        const filteredBlogs = blogsData.filter(
          (blog: any) => blog.lang === normalizedLang
        );

        

        setBlogs(filteredBlogs);
        const FeatureResponse = await fetchFeatureBlogs(detectedLng);
        const filteredFeatureBlogs = FeatureResponse.data;

  
        // Filter the blogs based on the normalized language
        const filteredFeaturedBlogs = filteredFeatureBlogs.filter(
          (blog: any) => blog.lang === normalizedLang
        );
        
        setFeaturedBlogs(filteredFeaturedBlogs);

        setPagination({
          page: response.current_page,
          pageSize: response.per_page,
          pageCount: response.last_page,
          total: response.total,
        });

        //console.log("Blogs data:", response);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }

      if (window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
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
    router.push(`/blogs?page=${newPage}`);
    sessionStorage.setItem('blogPage', newPage.toString());
  };


const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value.toLowerCase());
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

      <Fade triggerOnce={true} delay={40} direction="down" >
        
      
      <ContactBtn style={{ cursor: "pointer", margin: "auto" }} onClick={() => redirect("/contact-us")}>
      <Link
          onClick={() => redirect("/contact-us")}
          style={{ cursor: "pointer", margin: "auto", display:"inline-block" }}
          href={`/${lang}/contact-us`}
          className="link_item link"
          >
          {t("FurnitureToOrder.contactBtn")}
          </Link>
        </ContactBtn>
        
      </Fade>

     
        <BlogsMainContainer>
          <Fade triggerOnce={true} delay={40} direction="left">
            <h1 className="main_heading">
              {t("BlogBanner.bptitle")} <span>Post</span>
            </h1>
          </Fade>

          <div className="blogs_grid">
            
          <div className="blogs_list">
          {blogs.length > 0 ? (
            <div className="d">
              {blogs.map((item: any, index: number) => (
                <BlogItem id={item.id}
                  image={item.thumbnail}
                  heading={item.title}
                  description={item.description}
                  link={`/blog-detail/${item.id}`}
                  tag={item.category}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <div className="no_posts">
              {detectedLng === "ro"
                ? "Nu a fost găsită nicio postare."
                : "No posts found."}
            </div>
          )}
        </div>

            <div className="featured_list">
              <FeaturedBlogsWrapper>
              <div className="search_wrapper">
                <Fade triggerOnce={true} delay={40} direction="right">
                  <h2 className="title">{t("BlogBanner.Search")}</h2>
                </Fade>
                <Fade triggerOnce={true} delay={40} direction="right">
                  <div className="input_wrapper">
                    <Input
                      className="search_input"
                      placeholder={t("BlogBanner.SearchPlaceholder")}//Introduceți cuvinte cheie
                      onChange={handleSearchInputChange}
                      value={searchTerm}
                    />
                    <Button className="search_btn" onClick={async () => {
                      const response = await searchBlogs(detectedLng, encodeURIComponent(searchTerm.toLowerCase()));
                                    const blogsData = response.data;
                                    console.log(blogsData);

                                    if(blogsData!=null){

                                    setSearchTerm(searchTerm.toLowerCase());
                            
                                    // Normalize the detectedLng to match the database values
                                    const normalizedLang2 = detectedLng === "ro" ? "rom" : detectedLng; // Map 'ro' to 'rom'
                            
                                    // Filter the blogs based on the normalized language
                                    const filteredwBlogs = blogsData.filter(
                                      (blog: any) => blog.lang === normalizedLang2
                                    );
                                    setBlogs(filteredwBlogs);

                                    setPagination({
                                      page: response.current_page,
                                      pageSize: response.per_page,
                                      pageCount: response.last_page,
                                      total: response.total,
                                    });
                                  }
                        }}>
                      <Image
                        src="/Images/Icons/SearchIcon.svg"
                        alt="search"
                        height={17}
                        width={17}
                      />
                    </Button>
                  </div>
                </Fade>
              </div>
              
              <FeaturedBlogs data={featuredBlogs} />
              </FeaturedBlogsWrapper>
            </div>
          </div>

          {/* Pagination Controls */}
          {pagination.pageCount > 1 && (
            <Fade triggerOnce={true} delay={40} direction="up">
              <BlogsPagination>
                <button
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page <= 1}
                >{t("Previous")}
                  
                </button>
                <span>
                {t("Page")} {pagination.page} of {pagination.pageCount}
                </span>
                <button
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page >= pagination.pageCount}
                >
                  {t("Next")}
                  
                </button>
              </BlogsPagination>
            </Fade>
          )}
        </BlogsMainContainer>
     
    </ContainerMain>
  );
};

export default BlogsMain;
