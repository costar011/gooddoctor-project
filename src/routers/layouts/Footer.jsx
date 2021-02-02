import React from "react";
import styled from "styled-components";
import logo from "../../img/hoscoc.png";
import { Wrapper } from "../../components/commonComponent";

const FooterWrapper = styled.div`
  height: 35vh;
  margin-top: 40px;

  background-color: ${(props) => props.theme.mainThemeColor};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FooterTxt = styled.p`
  font-size: 15px;
  color: #ececec;
  margin: 10px 0px 10px 100px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper height={`100%`} width={`200px`}>
        <LogoBox>
          <img src={logo} width="300px" height="230px" />
        </LogoBox>
      </Wrapper>

      <Wrapper height={`100%`} width={`1000px`} al={`center`} ju={`center`}>
        <FooterTxt>(주) 4leaf / 충남 공주시 우금티로 530</FooterTxt>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
