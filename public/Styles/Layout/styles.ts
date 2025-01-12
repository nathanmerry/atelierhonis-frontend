"use client";
import styled from "styled-components";

export const ContainerMain = styled.section`
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
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;
