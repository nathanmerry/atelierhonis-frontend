import Image from "next/image";
import styled from "styled-components";

const BlogsBannerContainer = styled.div`
  position: relative;
  z-index: 1;

  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 7rem 0;
  .blog_banner {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .content {
    .sub_heading {
      color: #fff;
      font-family: Gilroy-SemiBold;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.19688rem;
      text-transform: uppercase;
    }
    .heading {
      margin-top: 1rem;
      color: #fff;
      font-family: "Abhaya Libre";
      font-size: 4.375rem;
      font-style: normal;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: -0.0875rem;
      max-width: 45.85844rem;
    }
  }

  @media screen and (max-width: 991px) {
    .content {
      .sub_heading {
        font-size: 1rem;
      }
      .heading {
        font-size: 2.625rem;
        max-width: 19.95763rem;
      }
    }
  }
`;

const TipsBannerWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 3.8rem;
  border-radius: 1.31225rem;
  background: #f5f9ff;
  box-shadow: 0px 4.199px 90.491px 0px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .content {
    padding: 2.2rem;

    .heading {
      color: #1e1e1e;
      font-family: "Abhaya Libre";
      font-size: 2.625rem;
      font-style: normal;
      font-weight: 700;
      line-height: 111.905%;
      letter-spacing: -0.0525rem;

      span {
        color: #ff6f00;
        font-family: "Abhaya Libre";
        font-size: 2.625rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2.9375rem;
        letter-spacing: -0.0525rem;
      }
    }

    .description {
      margin-top: 0.81rem;
      color: #1e1e1e;
      font-family: Gilroy-Medium;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 185%;
    }
  }

  .banner_image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }

  @media screen and (max-width: 991px) {
    margin-top: 5rem;
    grid-template-columns: 100%;

    .content {
      padding: 3rem 1rem;

      .description {
        font-size: 0.875rem;
      }
    }

    .banner_image {
      height: 26.74725rem;
    }
  }
`;

const FeaturedBlogsWrapper = styled.div`
  .search_wrapper {
    overflow: hidden;
    border-radius: 1rem;
    background: #f5f9ff;
    box-shadow: 0px 4px 132.8px 0px rgba(0, 0, 0, 0.04);
    padding: 0.88rem 0.98rem;

    .title {
      color: #121926;
      font-family: "Abhaya Libre";
      font-size: 2.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 123.821%;
      letter-spacing: -0.0425rem;
      margin-bottom: 0.5rem;
    }

    .input_wrapper {
      position: relative;
      z-index: 1;

      .search_input {
        height: 3.2rem;
        border-radius: 2.474rem;
        border: 0.812px solid rgba(255, 255, 255, 0.6);
        background: rgba(181, 181, 181, 0.15);
        backdrop-filter: blur(3.769951343536377px);
        padding: 0.47125rem 0.47125rem 0.47125rem 1.17813rem;
        padding-right: 3.2rem;

        color: #000000;
        font-family: Gilroy-Medium;
        font-size: 1.17813rem;
        font-style: normal;
        font-weight: 400;
        line-height: 195.5%;

        &::placeholder {
          color: rgba(40, 40, 40, 0.65);
          font-family: Gilroy-Medium;
          font-size: 1.17813rem;
          font-style: normal;
          font-weight: 400;
          line-height: 195.5%; /* 2.30319rem */
        }
      }

      .search_btn {
        height: 2.3rem;
        width: 2.3rem;
        border-radius: 1.41375rem;
        background: #ff6f00 !important;
        border: none;

        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        z-index: 2;
      }
    }
  }

  .featured_blogs_list {
    overflow: hidden;
    margin-top: 1.5rem;
    border-radius: 1rem;
    background: #f5f9ff;
    box-shadow: 0px 4px 132.8px 0px rgba(0, 0, 0, 0.04);
    padding: 1.5rem 1.3rem;
    .title {
      color: #000;
      font-family: "Abhaya Libre";
      font-size: 2.26069rem;
      font-style: normal;
      font-weight: 700;
      line-height: 111.905%;
      letter-spacing: -0.04519rem;

      span {
        color: #ff6f00;
      }
    }

    display: flex;
    flex-direction: column;
    gap: 2rem;

    .feature_blog_item {
      display: grid;
      grid-template-columns: 4rem 1fr;
      align-items: center;
      gap: 1rem;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
      }

      .content {
        .heading {
          color: #000;
          font-family: "Abhaya Libre";
          font-size: 1.17813rem;
          font-style: normal;
          font-weight: 600;
          line-height: 195.5%;
          white-space: nowrap; /* Prevents the text from wrapping */
          overflow: hidden; /* Hides any content that overflows */
          text-overflow: ellipsis; /* Adds '...' if the text overflows */
          max-width: 14rem;
        }

        .date {
          color: rgba(40, 40, 40, 0.65);
          font-family: "Abhaya Libre";
          font-size: 1.17813rem;
          font-style: normal;
          font-weight: 600;
          line-height: 100.5%;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
  }
`;

const BlogsMainContainer = styled.div`
  .main_heading {
    color: var(--Text-Title-Text, #333);
    font-family: "Abhaya Libre";
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 106.667%;
    letter-spacing: -0.075rem;

    span {
      color: #ff6f00;
      font-family: "Abhaya Libre";
      font-size: 3.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 4rem;
      letter-spacing: -0.075rem;
    }
  }

  .blogs_grid {
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: 1fr 21.875rem;
    gap: 2rem;

    .blogs_list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  @media screen and (max-width: 991px) {
    .main_heading {
      font-size: 2.625rem;
      span {
        font-size: 2.625rem;
      }
    }
    .blogs_grid {
      grid-template-columns: 100%;
    }
  }
`;

const BlogItemWrapper = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  background: #f5f9ff;
  box-shadow: 0px 4px 132.8px 0px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;

  display: grid;
  grid-template-columns: 18.5rem 1fr;
  gap: 2rem;

  .image_wrapper {
    border-radius: 0.5625rem;
    overflow: hidden;
    height: 100%;
    .main_blog_image {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: all.3s ease;
    }
  }
  .content {
    .tag {
      border-radius: 0.25rem;
      background: #43cc732a;
      padding: 0.16rem 1rem;
      width: fit-content;
      color: #5bad8b;
      font-family: Gilroy-Medium;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 110%;
    }

    .heading {
      margin-top: 1.29rem;
      color: #121926;
      font-family: "Abhaya Libre";
      font-size: 2.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 123.821%;
      letter-spacing: -0.0425rem;

      /* Add these for line clamping */
      display: -webkit-box;
      -webkit-line-clamp: 2; /* Number of lines to show */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .desc {
      margin-top: 1rem;
      color: #1e1e1e;
      font-family: "Gilroy-Medium";
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 161%;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .link {
      color: #ff6f00;
      font-size: 0.79894rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  }

  &:hover {
    .image_wrapper {
      .main_blog_image {
        scale: 1.2;
      }
    }
  }

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column-reverse;

    .content {
      .image_wrapper {
        height: 20.25rem;
      }
    }
  }
`;

const BlogDetailPage = styled.div`
  padding: 10rem 0;

  .main_title {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #121926;
    font-family: "Abhaya Libre";
    font-size: 2.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 123.821%;
    letter-spacing: -0.0425rem;
  }

  .category {
    color: #5bad8b;
    font-family: Gilroy-Medium;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 105%;
    padding: 0.8rem 1rem;
    border-radius: 0.25rem;
    background: #43cc734a;
    width: fit-content;
  }

  .content_container {
    margin-top: 3rem;

    ol,
    ul {
      padding-left: 1rem;
    }
  }

  .heading {
    font-family: "Abhaya Libre";
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .bullet_point {
    list-style-type: disc;
    margin-left: 2rem;
  }
`;

const FeaturedImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: contain;
  max-width: 65rem;
  max-height: 35rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const BlogsPagination = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  button {
    border-radius: 4.3125rem;
    background: #000;
    padding: 0.54338rem 1.18563rem;

    color: #ffffff;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.02rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
    }
  }

  span {
    overflow: hidden;
    color: #1e1e1e;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Gilroy-Medium;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 161%;
  }
`;

const BlogDetailContainer = styled.div`
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1040px;
  }
`;

export {
  BlogsBannerContainer,
  TipsBannerWrapper,
  FeaturedBlogsWrapper,
  BlogsMainContainer,
  BlogItemWrapper,
  BlogDetailPage,
  FeaturedImage,
  BlogsPagination,
  BlogDetailContainer,
};
