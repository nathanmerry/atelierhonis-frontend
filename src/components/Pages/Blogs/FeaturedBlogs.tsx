"use client";

import Image from "next/image";
import { useI18n } from "@/hooks/useI18n";
import styled from "styled-components";
import { Button, Input } from "antd";
import Link from "next/link";
import { FeaturedBlogsWrapper } from "./styles";
import { BlogItemDataType } from "./BlogItem";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";

type FeaturedBlogsType = {
  data: any[];
};

const FeaturedBlogs: React.FC<FeaturedBlogsType> = ({ data }) => {
  const { t } = useI18n();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const { redirect } = useRouteRedirect();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <FeaturedBlogsWrapper>
      <div className="search_wrapper">
        <Fade direction="right">
          <h2 className="title">Căutare</h2>
        </Fade>
        <Fade direction="right">
          <div className="input_wrapper">
            <Input
              className="search_input"
              placeholder="Introduceți cuvinte cheie"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Button className="search_btn">
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

      <div className="featured_blogs_list">
        <Fade direction="right">
          <h2 className="title">
            Postări <span>populare</span>
          </h2>
        </Fade>
        {data.map((item, index) => {
          const heading = item.title.toLowerCase(); // Ensure it's lowercase for search
          const date = new Date(item.updated_at ?? "").toLocaleDateString(); // Format the date

          const isVisible =
            heading.includes(searchTerm.toLowerCase()) ||
            date.includes(searchTerm);

          const imageUrl = `${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}storage/uploads/blogs/${item.thumbnail}`;

          return (
            <Fade direction="right" key={index}>
              <span
                onClick={() => redirect(`/blog-detail/${item.id}`)}
                className="feature_blog_item"
                style={{
                  display: isVisible ? "flex" : "none",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={imageUrl}
                  alt={item.title}
                  height={64}
                  width={64}
                  style={{
                    height: "4rem",
                    width: "4rem",
                    borderRadius: "0.5rem",
                    objectFit: "cover",
                  }}
                />
                <div className="content">
                  <h2 className="heading">{item.title}</h2>{" "}
                  {/* Display the title */}
                  <h3 className="date">{date}</h3>{" "}
                  {/* Display the formatted date */}
                </div>
              </span>
            </Fade>
          );
        })}
      </div>
    </FeaturedBlogsWrapper>
  );
};

export default FeaturedBlogs;
