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

// const BlogsDataList: BlogItemDataType[] = [
//   {
//     image: "/Images/Blogs/Blog1.png",
//     tag: "Soluții Perfect Fit",
//     heading:
//       "Alegerea produselor potrivite pentru dimensiunile bucătăriei tale.",
//     description:
//       "Puteți avea o bucătărie mare sau mică. Nu conteaza dimensiunea, cert este ca in orice fel de bucatarie ai nevoie de spatiu de depozitare, cu cat mai mult cu atat mai bine. Cu alte cuvinte, alegerea dimensiunilor mobilierului este extrem de importantă. De exemplu, în loc să optați pentru dulapuri superioare și inferioare, puteți pune dulapuri înalte, dacă spațiul permite.",
//     link: "#",
//   },
//   {
//     image: "/Images/Blogs/Blog2.png",
//     tag: "Stil-Mobilier perfect",
//     heading: "Alege mobilierul care se potrivește stilului tău.",
//     description:
//       "Analizezi modele de bucatarii...dar nu stii ce sa alegi, impreuna cu consultantii nostri vei primi cele mai bune sugestii. Mobilierul de bucătărie pe care îl alegeți nu trebuie să îndeplinească doar funcția de depozitare, ci și să aducă o contribuție semnificativă la estetica bucătăriei dumneavoastră. Astfel, permite dulapurilor să îmbunătățească vizual spațiul, completându-se armonios cu celelalte elemente de decor. In acest context, este esential sa acordam o atentie deosebita alegerii panourilor si fronturilor, inclusiv blatului pentru mobilierul de bucatarie. Puteți crea un design care să reflecte pe deplin stilul dvs. personal, folosind materiale de top de la furnizorii noștri: AGT, EGGER, CLEAF, NETTFRONT.",
//     link: "#",
//   },
//   {
//     image: "/Images/Blogs/Blog3.png",
//     tag: "Paleta perfecta pentru bucataria ta",
//     heading: "Alegerea culorilor pentru mobilierul de bucătărie.",
//     description:
//       "Un aspect esential de luat in considerare atunci cand comandati mobilier de bucatarie este alegerea culorii potrivite. Acesta trebuie să reflecte preferințele dumneavoastră și să fie în concordanță cu tendințele actuale de design interior, important este să decideți dacă nuanțele alese se potrivesc spațiului disponibil. De exemplu, în cazul bucătăriilor mici, culorile deschise precum gri deschis, crem sau alb pot contribui la crearea unei senzații de mai mult spațiu. Totuși, asta nu înseamnă să te limitezi la o singură culoare. Puteți opta pentru diferite combinații de culori pentru ușile dulapului, adăugând astfel mai multă creativitate și viață încăperii. In plus, pentru a crea o armonie vizuala in bucatarie, puteti alege ca masa si dulapurile sa fie de aceeasi nuanta sau nuante complementare.",
//     link: "#",
//   },
//   {
//     image: "/Images/Blogs/Blog4.png",
//     tag: "Upgrade-uri obligatorii",
//     heading: "Alege produsele care vor face diferența în spațiul tău.",
//     description:
//       "Tu decizi cum va arăta bucătăria căutând idei de decorare pe care le poți aplica. În această direcție, atunci când alegi dulapurile, poți vedea opțiunile de mâner oferite de noi marca WTP și cea mai potrivită alternativă pentru decorul tău clasic, modern, minimalist. Cu toate acestea, deși detaliile sunt importante, puteți acorda prioritate și alegerii dulapurilor de bucătărie. Poate doriți să utilizați alternativele de uși NETTFRONT cu margini tăiate adânc sau cele cu un cadru care adaugă un plus de eleganță bucătăriei dumneavoastră.",
//     link: "#",
//   },
//   {
//     image: "/Images/Blogs/Blog5.png",
//     tag: "Choose Sustainably",
//     heading: "Alege produse durabile",
//     description:
//       "Stilul și funcționalitatea sunt, fără îndoială, esențiale, dar durabilitatea dulapurilor de bucătărie este la fel de importantă. Criterii precum rezistența la apă și prevenirea umflării materialului sunt factori critici pentru a asigura utilizarea pe termen lung. În acest sens, puteți avea deplină încredere în partenerii noștri EGGER, AGT, CLEAF și NETTFRONT, care oferă produse de înaltă calitate concepute să reziste ani de zile. Totodata, daca iti doresti protectie suplimentara pentru mobilierul tau de bucatarie, iti recomandam dulapuri din MDF, dotate cu panouri rezistente la zgarieturi, care isi vor pastra eleganta initiala pentru o perioada indelungata.",
//     link: "#",
//   },
// ];

// const FeaturedBlogsList: FeaturedBlogsDataType[] = [
//   {
//     image: "/Images/Blogs/Blog1.png",
//     heading: "Top 5 Destinații din Japonia",
//     date: "10 septembrie 2020",
//     link: "#",
//   },
//   {
//     image: "/Images/Blogs/Blog2.png",
//     heading: "Destinația noastră preferată",
//     date: "10 septembrie 2020",
//     link: "#",
//   },
//   {
//     image: "/Images/Blogs/Blog3.png",
//     heading: "Priveliște superbă la apus!",
//     date: "10 septembrie 2020",
//     link: "#",
//   },
//   {
//     image: "/Images/Blogs/Blog4.png",
//     heading: "Majestuosul Munte Fuji",
//     date: "10 septembrie 2020",
//     link: "#",
//   },
//   {
//     image: "/Images/Blogs/Blog5.png",
//     heading: "Tokyo Disneyland vibrant",
//     date: "10 septembrie 2020",
//     link: "#",
//   },
// ];

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
  const [blogs, setBlogs] = useState<BlogItemDataType[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<BlogItemDataType[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pageSize: 25,
    pageCount: 1,
    total: 0,
  });

  useEffect(() => {
    const getBlogs = async (page: number = 1) => {
      try {
        const response = await fetchBlogs({
          page,
          pageSize: 25,
          locale: detectedLng ?? "en",
        }); // Pass page and pageSize
        console.log("data:", response.data);
        console.log("pagination:", response.meta.pagination);

        const formattedBlogs = response.data.map((blog: any) => ({
          image: blog.image?.url, // Adjust if needed
          tag: blog.category,
          heading: blog.title,
          description: blog.description
            .map((part: any) =>
              part.children
                .map((child: any) => child.text)
                .filter(Boolean)
                .join("")
            )
            .join(" "),
          link: `/${detectedLng}/blog-detail/${blog.documentId}`,
          featured: blog.featured,
          createdAt: blog.createdAt,
        }));

        setBlogs(formattedBlogs);
        setPagination(response.meta.pagination);

        const featuredBlogsList = formattedBlogs.filter(
          (blog: any) => blog.featured
        );
        setFeaturedBlogs(featuredBlogsList);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    getBlogs(pagination.page); // Fetch blogs for the current page
  }, [pagination.page, pathname]);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > pagination.pageCount) return; // Avoid invalid page numbers
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
            {blogs.map((item, index) => (
              <BlogItem
                image={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${item.image}`}
                heading={item.heading}
                description={item.description}
                link={item.link}
                tag={item.tag}
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
