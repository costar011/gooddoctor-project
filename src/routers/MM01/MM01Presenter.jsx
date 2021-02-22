import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../components/commonComponent";
import mm01map from "../../img/mm01map.png";
import Fade from "react-reveal/Fade";

const Image = styled.img`
  width: 400px;
  height: 300px;
  opacity: 0.7;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
`;

const LeftWrapper = styled.div`
  width: 45%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const RightWrapper = styled.div`
  width: 55%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AdText = styled.span`
  font-size: 25px;
  font-style: oblique;
  font-weight: 800;
  color: #5a636b;
  padding: 5px;
  margin: 10px;
  opacity: 0.5;
`;

const SpanText = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #546574;
  margin-bottom: 10px;
`;

const LogoText = styled.span`
  font-size: 30px;
  font-weight: 800;
  color: #23435e;
  margin-bottom: 20px;
`;

const Text = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #808f9c;
  margin-bottom: 5px;
`;

const MM01Presenter = () => {
  return (
    <Fade bottom>
      <Wrapper height="100vh">
        <TopWrapper>
          <AdText>조장일해라병원</AdText>
          <AdText>정예림바보병원</AdText>
          <AdText>김경민바보병원</AdText>
          <AdText>정예림멍청병원</AdText>
          <AdText>조장은멍청병원</AdText>
          <AdText>조장일안해병원</AdText>
        </TopWrapper>
        <BottomWrapper>
          <LeftWrapper>
            <SpanText>한눈에 알아보는 전국의 예약 가능한 병원</SpanText>
            <LogoText>HOSCOC에서 빠르게 예약해보세요</LogoText>
          </LeftWrapper>
          <RightWrapper>
            <Image src={mm01map} />
          </RightWrapper>
        </BottomWrapper>
      </Wrapper>
    </Fade>
  );
};

export default MM01Presenter;
