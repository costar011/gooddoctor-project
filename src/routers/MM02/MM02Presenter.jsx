import React from "react";
import styled from "styled-components";

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
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
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
  font-size: 20px;
  font-weight: 800;
  color: #546574;
  padding: 5px;
  margin: 10px;
`;

const MainText = styled.span`
  font-size: 30px;
  font-style: oblique;
  font-weight: 800;
  color: #8393a0;
  padding: 5px;
  margin: 10px;
`;

const MM02Presenter = () => {
  return (
    <Wrapper>
      <TopWrapper>
        <ContentText>Hospital appointment System</ContentText>
        <MainText>Hoscoc</MainText>
        <ContentWrapper>
          <ContentText>
            안녕하세요 저는 존예존귀 김경민 입니다. 오늘은 효진군과 예림군이
            바보인 이유를 설명해 보겠습니다.
          </ContentText>
          <ContentText>
            일단 효진군은 걍 어떻게 하면 얼타기 때문이고, 예림군은 하는짓이
            (푸흡) 초딩 같기 때문입니다.
          </ContentText>
          <ContentText>이상 존예존귀 김경민 이었습니다.</ContentText>
        </ContentWrapper>
      </TopWrapper>
      <BottomWrapper></BottomWrapper>
    </Wrapper>
  );
};

export default MM02Presenter;
