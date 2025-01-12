import { Button, Form, Input } from "antd";
import SearchIcon from "/public/Images/Icons/SearchIcon.svg";
import {
  HeroSectionContainer,
  BackgroundImage,
  StylesSearchForm,
  HeroSectionWhiteGradient,
} from "./styles";
import { useI18n } from "@/hooks/useI18n";
import { Fade } from "react-awesome-reveal";

const HeroSection: React.FC = () => {
  const { t } = useI18n();

  const [searchForm] = Form.useForm();

  const onSearch = (value: any) => {
    console.log("Search value:", value);
  };

  return (
    <>
      <HeroSectionContainer>
        <BackgroundImage
          src="/Images/Home/HeroSectionBg.png"
          alt="Hero Background"
          height={1000}
          width={1440}
          priority
        />

        <div className="hero_section_content">
          <div className="inner_content_wrapper">
            <Fade direction="down">
              <h1 className="heading">{t("hero.heading")}</h1>
            </Fade>
            <Fade direction="down">
              <h1 className="paragraph">{t("hero.paragraph")}</h1>
            </Fade>
            {/* <Fade direction="down">
              <StylesSearchForm form={searchForm} onFinish={onSearch}>
                <Form.Item
                  name="search"
                  rules={[{ required: true, message: "" }]}
                >
                  <Input placeholder={t("hero.inputPlaceholder")} />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  <SearchIcon />
                </Button>
              </StylesSearchForm>
            </Fade> */}
          </div>
        </div>
      </HeroSectionContainer>

      <HeroSectionWhiteGradient>
        <div className="inner_gradient"></div>
      </HeroSectionWhiteGradient>
    </>
  );
};

export default HeroSection;
