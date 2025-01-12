import styled from "styled-components";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { useI18n } from "@/hooks/useI18n";
import { MadeToPerfectionContainer } from "./styles";
import { Fade } from "react-awesome-reveal";

const MadeToPerfection: React.FC = () => {
  const { t } = useI18n();
  return (
    <MadeToPerfectionContainer>
      <ContainerMain>
        <Fade direction="right">
          <div className="inner_container">
            <h2 className="heading">{t("MadeToPerfection.heading")}</h2>
            <p className="description">{t("MadeToPerfection.description")}</p>
          </div>
        </Fade>
      </ContainerMain>
    </MadeToPerfectionContainer>
  );
};

export default MadeToPerfection;
