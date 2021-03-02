import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import introImg from "../../img/introImg.png";

const MainWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};

  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
`;

const ColWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: 0px 0px 50px 80px;
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: row;
`;

const SpanWrapper = styled.div`
  width: ${(props) => props.width || `48%`};
  height: ${(props) => props.height || `100%`};
  margin: 40px 40px 40px 40px;
  padding: 0px 0px 30px 0px;

  display: flex;
  flex-direction: row;

  border-bottom: 7px #83adbd solid;
`;

const TextWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: 60px 0px 20px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EmjText = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin: 0px 0px 0px 30px;
`;

const SpanTextMain = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 8px 4px #60a3bc, 0px 3px 10px #0a3d62;
  margin: 0px 0px 0px 10px;
`;

const SpanText = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #808080;
`;

const SpanTextL = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 8px 4px #60a3bc, 0px 3px 10px #0a3d62;
  margin-bottom: 20px;
`;

const MM03Presenter = () => {
  return (
    <MainWrapper>
      <SpanWrapper>
        <Fade>
          <EmjText>🏥</EmjText>
          <SpanTextMain>Hoscoc과 건강을 예약하세요!</SpanTextMain>
        </Fade>
      </SpanWrapper>
      <ColWrapper>
        <Fade left>
          <img src={introImg} width="700px" height="700px" />
        </Fade>

        <TextWrapper>
          <Fade right>
            <TextWrapper>
              <SpanTextL>병원 예약 플랫폼 HOSCOC!</SpanTextL>
              <SpanText>
                전국의 병원 진료를 HOSCOC을 이용해 예약하세요!
              </SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanTextL>간편한 진료예약,</SpanTextL>
              <SpanText>언제 어디서나 쉽고 빠르게 예약하세요!</SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanTextL>요즘 같은 언택트 시대!</SpanTextL>
              <SpanText>함께 건강을 예약해봐요!</SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanTextL>건강한 생활을 예약하는 HOSCOC!</SpanTextL>
              <SpanText>병원 예약 웹 제작! 바로 만나보세요</SpanText>
            </TextWrapper>
          </Fade>
        </TextWrapper>
      </ColWrapper>
    </MainWrapper>
  );
};

export default MM03Presenter;
