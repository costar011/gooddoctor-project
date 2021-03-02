import React from "react";
import styled from "styled-components";

import content1 from "../../img/content1.png";
import content2 from "../../img/content2.png";
import content3 from "../../img/content3.png";
import content4 from "../../img/content4.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px;
  margin-top: 150px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentText = styled.span`
  font-size: 17px;
  font-weight: 800;
  color: #546574;
  padding: 5px;
  margin-top: 5px;
`;

const MainText = styled.span`
  font-size: 35px;
  font-style: oblique;
  font-weight: 800;
  color: #8393a0;
  padding: 20px;
  margin: 10px;
`;

const TopText = styled.span`
  font-size: 25px;
  font-weight: 800;
  color: #546574;
  padding: 5px;
`;

const Image = styled.img`
  width: 200px;
  height: 190px;
  opacity: 0.7;
`;

const MM02Presenter = () => {
  return (
    <Wrapper>
      <TopWrapper>
        <TopText>Hospital appointment System</TopText>
        <MainText>Hoscoc</MainText>
        <ContentWrapper>
          <ContentText>
            인터넷을 통한 진료예약으로 대기 시간을 절약해 보세요!
          </ContentText>
          <ContentText>
            방문 전에 진료시간, 병원소재, 의료원, 진료내용 등 병원에 대한 정보를
            미리 확인할 수 있습니다.
          </ContentText>
        </ContentWrapper>
      </TopWrapper>

      <BottomWrapper>
        <ImgWrapper>
          <Image src={content1} />
          <TopText>ijewfjwef</TopText>
          <ContentText>diwiwfeffeffnfuew</ContentText>
        </ImgWrapper>
        <ImgWrapper>
          <Image src={content2} />
          <TopText>efwefef</TopText>
          <ContentText>diwiwfefeefneflewnfewf</ContentText>
        </ImgWrapper>
        <ImgWrapper>
          <Image src={content3} />
          <TopText>fwefwfwef</TopText>
          <ContentText>diwiwfeffefjfoiwefe</ContentText>
        </ImgWrapper>
        <ImgWrapper>
          <Image src={content4} />
          <TopText>gdsgg</TopText>
          <ContentText>diwiwfeffuwfklfeflqkne</ContentText>
        </ImgWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};

export default MM02Presenter;
