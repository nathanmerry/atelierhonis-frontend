import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";

import { BlogDetailContainer, BlogDetailPage, FeaturedImage } from "./styles";
import styled from "styled-components";
import { fetchBlogDetailById } from "@/lib/api";
import SeoHead from "@/components/Layouts/SeoHead";
import { languageDetector } from "@/lib/languageDetector";
import locale from "antd/es/date-picker/locale/en_US";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const renderRichText = (content: any) => {
  return content.map((part: any, index: number) => {
    let textDecoration = "";
    if (part.strikethrough) textDecoration += "line-through ";
    if (part.underline) textDecoration += "underline";

    // Handle paragraphs
    if (part.type === "paragraph") {
      return (
        <p key={index} style={{ marginBottom: "1.5em" }}>
          {part.children.map((child: any, childIndex: number) => (
            <span
              key={`${index}-${childIndex}`}
              style={{
                fontWeight: child.bold ? "bold" : "normal",
                fontStyle: child.italic ? "italic" : "normal",
                textDecoration: textDecoration.trim(),
                textDecorationLine: child.underline ? "underline" : "none",
                backgroundColor: child.code ? "#f5f5f5" : "transparent",
                padding: child.code ? "0.2em" : "0",
                fontFamily: child.code
                  ? "'Courier New', Courier, monospace"
                  : "inherit",
              }}
            >
              {child.text}
            </span>
          ))}
        </p>
      );
    }

    // Handle headings
    if (part.type === "heading") {
      const HeadingTag = `h${part.level}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag key={index} style={{ marginBottom: "1.5em" }}>
          {part.children.map((child: any, childIndex: number) => (
            <span
              key={`${index}-${childIndex}`}
              style={{
                fontWeight: child.bold ? "bold" : "normal",
                fontStyle: child.italic ? "italic" : "normal",
                textDecoration: textDecoration.trim(),
                textDecorationLine: child.underline ? "underline" : "none",
                backgroundColor: child.code ? "#f5f5f5" : "transparent",
                padding: child.code ? "0.2em" : "0",
                fontFamily: child.code
                  ? "'Courier New', Courier, monospace"
                  : "inherit",
              }}
            >
              {child.text}
            </span>
          ))}
        </HeadingTag>
      );
    }

    // Handle unordered lists (ul)
    if (part.type === "list" && part.format === "unordered") {
      return (
        <ul key={index} style={{ marginBottom: "1.5em" }}>
          {part.children.map((listItem: any, listItemIndex: number) => (
            <li
              key={`${index}-${listItemIndex}`}
              style={{ marginBottom: "0.5em" }}
            >
              {listItem.children.map((child: any, childIndex: number) => (
                <span
                  key={`${index}-${listItemIndex}-${childIndex}`}
                  style={{
                    fontWeight: child.bold ? "bold" : "normal",
                    fontStyle: child.italic ? "italic" : "normal",
                    textDecoration: textDecoration.trim(),
                    textDecorationLine: child.underline ? "underline" : "none",
                    backgroundColor: child.code ? "#f5f5f5" : "transparent",
                    padding: child.code ? "0.2em" : "0",
                    fontFamily: child.code
                      ? "'Courier New', Courier, monospace"
                      : "inherit",
                  }}
                >
                  {child.text}
                </span>
              ))}
            </li>
          ))}
        </ul>
      );
    }

    // Handle ordered lists (ol)
    if (part.type === "list" && part.format === "ordered") {
      return (
        <ol key={index} style={{ marginBottom: "1.5em" }}>
          {part.children.map((listItem: any, listItemIndex: number) => (
            <li
              key={`${index}-${listItemIndex}`}
              style={{ marginBottom: "0.5em" }}
            >
              {listItem.children.map((child: any, childIndex: number) => (
                <span
                  key={`${index}-${listItemIndex}-${childIndex}`}
                  style={{
                    fontWeight: child.bold ? "bold" : "normal",
                    fontStyle: child.italic ? "italic" : "normal",
                    textDecoration: textDecoration.trim(),
                    textDecorationLine: child.underline ? "underline" : "none",
                    backgroundColor: child.code ? "#f5f5f5" : "transparent",
                    padding: child.code ? "0.2em" : "0",
                    fontFamily: child.code
                      ? "'Courier New', Courier, monospace"
                      : "inherit",
                  }}
                >
                  {child.text}
                </span>
              ))}
            </li>
          ))}
        </ol>
      );
    }

    // Handle links (anchor tags)
    if (part.type === "link") {
      return (
        <a
          key={index}
          href={part.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          {part.children.map((child: any, childIndex: number) => (
            <span
              key={`${index}-${childIndex}`}
              style={{
                fontWeight: child.bold ? "bold" : "normal",
                fontStyle: child.italic ? "italic" : "normal",
                textDecoration: textDecoration.trim(),
                textDecorationLine: child.underline ? "underline" : "none",
                backgroundColor: child.code ? "#f5f5f5" : "transparent",
                padding: child.code ? "0.2em" : "0",
                fontFamily: child.code
                  ? "'Courier New', Courier, monospace"
                  : "inherit",
              }}
            >
              {child.text}
            </span>
          ))}
        </a>
      );
    }

    // Handle images (img)
    if (part.type === "image") {
      return (
        <Image
          key={index}
          src={part.url}
          alt={part.alternativeText || ""}
          style={{ maxWidth: "100%", marginBottom: "1.5em" }}
          height={400}
          width={1020}
        />
      );
    }

    // Handle other types (for example, text)
    if (part.type === "text" && part.text) {
      return (
        <span
          key={index}
          style={{
            fontWeight: part.bold ? "bold" : "normal",
            fontStyle: part.italic ? "italic" : "normal",
            textDecoration: textDecoration.trim(),
            textDecorationLine: part.underline ? "underline" : "none",
            backgroundColor: part.code ? "#f5f5f5" : "transparent",
            padding: part.code ? "0.2em" : "0",
            fontFamily: part.code
              ? "'Courier New', Courier, monospace"
              : "inherit",
          }}
        >
          {part.text}
        </span>
      );
    }

    return null;
  });
};

const BlogDetail = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { id } = router.query;
  const [blog, setBlog] = useState<any | null>(null);
  const Backend_Base_Url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
  const detectedLng = languageDetector.detect();

  useEffect(() => {
    if (typeof id === "string") {
      console.log("ID from useEffect:", id);

      const getBlogDetail = async () => {
        try {
          const blogData = await fetchBlogDetailById(id, detectedLng ?? "en");
          console.log("Fetched blog data:", blogData.data);
          setBlog(blogData.data);
        } catch (error) {
          console.error("Error fetching blog detail:", error);
        }
      };

      getBlogDetail();
    }
  }, [id, pathname]);

  if (!blog) {
    return <p>Loading blog details...</p>;
  }

  const imageUrl = blog.image.url;

  return (
    <BlogDetailContainer>
      <SeoHead
        title={`Blog - ${blog.title} | ATELIER HONIS`}
        description={renderRichText(blog.description).toString()}
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
        <div className="content_container">
          {renderRichText(blog.description)}
        </div>
      </BlogDetailPage>
    </BlogDetailContainer>
  );
};

export default BlogDetail;
