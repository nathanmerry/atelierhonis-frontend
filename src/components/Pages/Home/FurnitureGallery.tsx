"use client";

import { useI18n } from "@/hooks/useI18n";
import { Button, Modal } from "antd";
import Image from "next/image";
import { useState,useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const FurnitureGalleryContainer = styled.div`
  margin-top: 6.25rem;
  display: grid;
  grid-template-areas:
    "content content Image1 Image3"
    "Image2 Image4 Image4 Image5"
    "Image2 Image6 Image7 Image8";
  grid-template-columns: repeat(4, 1fr);

  gap: 0.72rem;

  .content {
    grid-area: content;
    padding: 2rem;
    padding-left: 0;
    .sub_heading {
      color: #ff6f00;
      font-family: Gilroy-SemiBold;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.175rem;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .heading {
      color: #1e1e1e;
      font-family: "Abhaya Libre";
      font-size: 3.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 118.333%;
      max-width: 32.1875rem;

      span {
        color: #ff6f00;
        font-family: "Abhaya Libre";
        font-size: 3.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 118.333%;
      }
    }

    .description {
      color: #1e1e1e;
      font-family: "Gilroy-Medium";
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 185%;
      max-width: 34.75rem;
    }
  }

  img {
    height: 110%;
    width: 110%;
    object-fit: cover;
    object-position: center;
  }

  .Image-0 {
    grid-area: Image1;
    border-radius: 1.5rem;
    overflow: hidden;
  }
  .Image-1 {
    grid-area: Image2;
    border-radius: 1.5rem;
    overflow: hidden;
  }
  .Image-2 {
    grid-area: Image3;
    border-radius: 1.5rem;
    overflow: hidden;
  }
  .Image-3 {
    grid-area: Image4;
    border-radius: 1.5rem;
    overflow: hidden;
  }
  .Image-4 {
    grid-area: Image5;
    border-radius: 1.5rem;
    overflow: hidden;
  }
  .Image-5 {
    grid-area: Image6;
    border-radius: 1.5rem;
    overflow: hidden;
  }
  .Image-6 {
    grid-area: Image7;
    border-radius: 1.5rem;
    overflow: hidden;
  }
  .Image-7 {
    grid-area: Image8;
    border-radius: 1.5rem;
    overflow: hidden;
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "content content"
      "Image1 Image2"
      "Image3 Image4"
      "Image5 Image4"
      "Image6 Image7"
      "Image6 Image7"
      "Image8 Image8";

    .content {
      padding-right: 0;
      .heading {
        font-size: 2.625rem;
        span {
          font-size: 2.625rem;
        }
      }
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;

  .control_btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 19;
    opacity: 0;
    border-radius: 2.3125rem;
    background: #ff6f00 !important;

    height: 2rem;
    width: 2rem;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg path {
      fill: #ffffff;
    }
  }

  &:hover {
    .control_btn {
      opacity: 1;
    }
  }

  &.maximize {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 100vh;
    width: 100%;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 !important;

    &::before {
      content: "";
      height: 100%;
      width: 100%;
      border-radius: 0;
      background: #deebff;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .control_btn {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 9999;
    }

    img {
      max-height: calc(100vh - 3rem);
      width: 100%;
      object-fit: contain;
    }
  }

  & > div {
    height: 100%;
  }
`;

const GalleryPics = [
  "/Images/Home/gallery/image1.jpg",
  "/Images/Home/gallery/image5.jpg",
  "/Images/Home/gallery/image2.jpg",
  "/Images/Home/gallery/image3.jpg",
  "/Images/Home/gallery/image4.jpg",
  "/Images/Home/gallery/image6.jpg",
  "/Images/Home/gallery/image7.jpg",
  "/Images/Home/gallery/image8.jpg",
 // "/Images/Home/gallery/image9.jpg",
  // "/Images/Home/Gallery2.png",
  // "/Images/Home/Gallery3.png",
  // "/Images/Home/Gallery4.png",
  // "/Images/Home/Gallery5.png",
  // "/Images/Home/Gallery6.png",
  // "/Images/Home/Gallery7.png",
  // "/Images/Home/Gallery8.png",
];

const FullScreenModal = styled(Modal)`
  height: 100%;
  width: 100% !important;

  .ant-modal-content {
    border-radius: 0;
    background-color: #00000084;
    
    .ant-modal-close {
      background-color: #ffffff;
    }

    .swiper {
      padding: 2rem 0;
      height: calc(100vh - 2.5rem);
      .swiper-wrapper {
        .swiper-slide {
          text-align:center;
          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        }
      }

      /* Style the next and previous arrows */
      .swiper-button-next,
      .swiper-button-prev {
        height: 2rem;
        width: 2rem;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px;
        border-radius: 50%;
        transition: all 0.3s ease;

        &::after {
          font-size: 1rem;
        }
      }
    }
  }
`;

const FurnitureGallery: React.FC = () => {
  const { t } = useI18n();


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Unique identifier for hash tracking
  const imageId = "FurnitureGallery";

  const openModal = (index: number) => {
    setCurrentSlideIndex(index);
    setIsModalOpen(true);
    window.location.hash = `#${imageId}${index}`; // Add hash
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.history.replaceState(null, "", window.location.pathname);
  };

    
  
    // Function to handle outside click and remove maximize
    useEffect(() => {

      const handleClickOutside = (event: MouseEvent) => {
  
        // Ensure element exists and click is NOT on an <img> or button inside it
        if (!(event.target as HTMLElement).closest(".swiper-button-next")  && !(event.target as HTMLElement).closest("img") && !(event.target as HTMLElement).closest("button")) {
          setIsModalOpen(false);
          window.history.pushState("", document.title, window.location.pathname); // Remove hash
        }
      };
  
      const handleHashChange = () => {
        const imageIdHash = window.location.hash;
        
        const extractedId = parseInt(imageIdHash.replace(/\D/g, ""), 10);
        if(imageIdHash=="#FurnitureGallery"+extractedId){
          
          setCurrentSlideIndex(isNaN(extractedId) ? 0 : extractedId);
          setIsModalOpen(isNaN(extractedId) ? false : true);
        }else{
          setIsModalOpen(false);
        }
      };
  
      // Add event listeners
      window.addEventListener("click", handleClickOutside);
      window.addEventListener("popstate", handleHashChange);
      window.addEventListener("hashchange", handleHashChange);
  
      return () => {
        // Cleanup event listeners
        window.removeEventListener("click", handleClickOutside);
        window.removeEventListener("popstate", handleHashChange);
        window.removeEventListener("hashchange", handleHashChange);
      };
    }, []);

  

  return (
    <FurnitureGalleryContainer>
      <div className="content" data-aos="flip-left">
        <Fade triggerOnce={true} delay={40} direction="left">
          <h3 className="sub_heading">{t("galleryContent.tag")}</h3>
        </Fade>

        <Fade triggerOnce={true} delay={40} direction="left">
          <h2 className="heading">
            {t("galleryContent.heading1")}{" "}
            <span>{t("galleryContent.heading2")}</span>
          </h2>
        </Fade>
        <Fade triggerOnce={true} delay={40} direction="left">
          <p className="description">{t("galleryContent.description")}</p>
        </Fade>
      </div>

      {GalleryPics.map((image, index) => (
        <ImageWrapper key={index} className={`Image-${index}`}>
          <Fade triggerOnce={true} delay={40} direction={index % 2 === 0 ? "left" : "right"} key={index}>
            <span>
              <Button
                type="primary"
                htmlType="button"
                className="control_btn"
                onClick={() => openModal(index)}
              >
                {currentSlideIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M200 32L56 32C42.7 32 32 42.7 32 56l0 144c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312l0 144c0 13.3 10.7 24 24 24l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l144 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-144c0-13.3-10.7-24-24-24L312 32c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z" />
                  </svg>
                )}
              </Button>
              <Image
                src={image}
                alt={`Image-${index}`}
                height={1000}
                width={1000}
                data-aos="flip-right"
              />
            </span>
          </Fade>
        </ImageWrapper>
      ))}

      {/* Modal with Swiper Slider */}
      <FullScreenModal
        open={isModalOpen}
        footer={null}
        centered
        onCancel={closeModal}
      >
        <Swiper
          key={currentSlideIndex}
          initialSlide={currentSlideIndex}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)} // Update current index when sliding
        >
          {GalleryPics.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Slide-${index}`}
                height={1000}
                width={1000}
                className="rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </FullScreenModal>
    </FurnitureGalleryContainer>
  );
};

export default FurnitureGallery;
