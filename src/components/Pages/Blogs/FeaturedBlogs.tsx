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

type FeaturedBlogsType = {
  data: BlogItemDataType[];
};

const FeaturedBlogs: React.FC<FeaturedBlogsType> = ({ data }) => {
  const { t } = useI18n();

  const [searchTerm, setSearchTerm] = useState<string>("");

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
          const heading = item.heading.toLowerCase();
          const date = new Date(item.createdAt ?? "").toLocaleDateString();

          const isVisible =
            heading.includes(searchTerm) || date.includes(searchTerm);

          return (
            <Fade direction="right" key={index}>
              <Link
                href={item.link}
                className="feature_blog_item"
                key={index}
                style={{ display: isVisible ? "flex" : "none" }} // Toggle visibility
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${item.image}`}
                  alt={item.heading}
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
                  <h2 className="heading">{item.heading}</h2>
                  <h3 className="date">
                    {new Date(item.createdAt ?? "").toLocaleDateString()}
                  </h3>
                </div>
              </Link>
            </Fade>
          );
        })}
      </div>
    </FeaturedBlogsWrapper>
  );
};

export default FeaturedBlogs;
