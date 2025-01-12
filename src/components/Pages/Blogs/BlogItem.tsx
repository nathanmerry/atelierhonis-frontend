"use client";

import Image from "next/image";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { useI18n } from "@/hooks/useI18n";
import styled from "styled-components";
import Link from "next/link";
import Item from "antd/es/list/Item";
import { BlogItemWrapper } from "./styles";
import { Fade } from "react-awesome-reveal";

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
  return (
    <BlogItemWrapper>
      <Fade direction="left">
        <div className="image_wrapper">
          <Image
            className="main_blog_image"
            src={image}
            alt={heading}
            height={520}
            width={1020}
          />
        </div>
      </Fade>

      <div className="content">
        <Fade direction="right">
          <div className="tag">{tag}</div>
        </Fade>
        <Fade direction="right">
          <h2 className="heading">{heading}</h2>
        </Fade>
        <Fade direction="right">
          <p className="desc">{description}</p>
        </Fade>
        <Fade direction="right">
          <Link href={link} className="link">
            Citeşte mai mult
          </Link>
        </Fade>
      </div>
    </BlogItemWrapper>
  );
};

export default BlogItem;
