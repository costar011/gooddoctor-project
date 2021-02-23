import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link, NavLink } from "react-router-dom";
import "@szhsin/react-menu/dist/index.css";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  color: ${(props) => props.theme.whiteColor};
  display: flex;
  flex-direction: row;
`;

const InnerWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SignWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #3c6382;
  margin: 0px 0px 0px 10px;
`;

const SpanText = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #3c6382;
  margin: 50px;
`;

const ActionButton = styled.button`
  padding: 7px;
  margin: 10px;
  color: #3c6382;
  background: none;
  background-color: #fff;
  border: none;
  border-radius: ${(props) => props.theme.radius};
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #fff;
    background-color: #3c6382;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <Fade>
          <NavLink to="/">
            <LogoText>Hoscoc</LogoText>
          </NavLink>
        </Fade>
      </InnerWrapper>
      <InnerWrapper>
        <SpanText>
          <Link to="/mm03" style={{ color: "#3c6382", width: "100px" }}>
            Intro
          </Link>
        </SpanText>
        <SpanText>
          <Link to="/mm04" style={{ color: "#3c6382", width: "200px" }}>
            Contact
          </Link>
        </SpanText>
        <SpanText>
          <Link to="/mm05" style={{ color: "#3c6382", width: "100px" }}>
            Service
          </Link>
        </SpanText>
        <SpanText>
          <Link to="/mm06" style={{ color: "#3c6382", width: "100px" }}>
            Community
          </Link>
        </SpanText>
      </InnerWrapper>

      <SignWrapper>
        <Link to="/mm07">
          <ActionButton>SING IN</ActionButton>
        </Link>
        <Link to="/mm08">
          <ActionButton>SING UP</ActionButton>
        </Link>
      </SignWrapper>
    </HeaderWrapper>
  );
};

export default Header;
