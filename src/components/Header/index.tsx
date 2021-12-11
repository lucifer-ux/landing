import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
// import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

interface SocialLinkProps {
  href: string;
  // src: string;
}

const SocialLink = ({ href }: SocialLinkProps) => {
  return (
    <a
    style={{width: "180px"}}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // key={src}
      // aria-label={src}
    >
      Sign-up
      {/* <SvgIcon src={src} width="25px" height="25px" /> */}
    </a>
  );
};

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };
  

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        
        
        <SocialLink
              href="formForSignUp.html"
                // src="twitter.svg"
              />
        
        
        {/* <a
          style={{ width: "180px" }}
          href="www.google.com" target="0"
        >
          <Span>
            <button >{t("Sign Up")}</button>
          </Span>
        </a> */}
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="170px" height="140px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
//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
