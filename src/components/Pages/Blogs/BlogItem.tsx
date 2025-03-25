"use client";

import Image from "next/image";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { useI18n } from "@/hooks/useI18n";
import styled from "styled-components";
import Link from "next/link";
import Item from "antd/es/list/Item";
import { BlogItemWrapper } from "./styles";
import { Fade } from "react-awesome-reveal";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";


export type BlogItemDataType = {
  image: string;
  tag: string;
  heading: string;
  description: string;
  link: string;
  createdAt?: string;
};

const BlogItem: React.FC<BlogItemDataType> = ({
  heading,
  image,
  description,
  link,
  tag,
}) => {
  const { redirect } = useRouteRedirect();
  const { t,lang } = useI18n();

  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}storage/uploads/blogs/${image}`;
  //console.log("imageUrl:", imageUrl);
  return (
    <BlogItemWrapper>
      <Fade triggerOnce={true} delay={40} direction="left">
        <div className="image_wrapper">
        <Link 
          onClick={(e) => {redirect(link); // Use Next.js navigation for fast transitions
          }}
          href={`/${lang}${link}`}
          className="link_item link"
          style={{
            cursor: "pointer"
          }}>
          <Image
            className="main_blog_image"
            src={imageUrl}
            alt={heading}
            height={520}
            width={1020}
          />
          </Link>
        </div>
      </Fade>

      <div className="content">
        <Fade triggerOnce={true} delay={40} direction="right">
          <div className="tag">{tag}</div>
        </Fade>
        <Fade triggerOnce={true} delay={40} direction="right">
        <Link 
          onClick={(e) => {redirect(link); // Use Next.js navigation for fast transitions
          }}
          href={`/${lang}${link}`}
          className="link_item link"
          style={{
            cursor: "pointer"
          }}><h2 className="heading">{heading}</h2></Link>
        </Fade>
        <Fade triggerOnce={true} delay={40} direction="right">
          <p className="desc">{description}</p>
        </Fade>
        <Fade triggerOnce={true} delay={40} direction="right">
          <Link 
          onClick={(e) => {redirect(link); // Use Next.js navigation for fast transitions
          }}
          href={`/${lang}${link}`}
          className="link_item link"
          style={{
            cursor: "pointer"
          }}>
            {t("BlogBanner.readmore")}
          </Link>
        </Fade>
      </div>
    </BlogItemWrapper>
  );
};

export default BlogItem;
