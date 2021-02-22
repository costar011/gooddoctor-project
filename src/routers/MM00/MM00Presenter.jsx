import React from "react";
import styled from "styled-components";
import iphonemockup from "../../img/iphonemockup.png";
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  opacity: 0.7;
`;

const LeftWrapper = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const RightWrapper = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

const TextDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const TextInput = styled.input`
  width: ${(props) => props.width || `420px`};
  height: 35px;
  border-radius: 10px;
  padding: 0px 10px;
  outline: none;
  border: 1px solid ${(props) => props.theme.greyColor};
  background-color: ${(props) => props.theme.whiteColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.5s;
  display: inline;

  &:hover {
    box-shadow: 5px 5px 5px #0b0b0b;
  }

  &:focus {
    box-shadow: 5px 5px 5px #0b0b0b;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 7px;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.subThemeColor};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
  display: inline;
  padding: 0px 10px;
  margin-left: -80px;
  font-weight: 600;

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 2px solid ${(props) => props.theme.subThemeColor};
    color: ${(props) => props.theme.subThemeColor};
  }
`;

const MM00Presenter = () => {
  return (
    <Fade bottom>
      <Wrapper>
        <LeftWrapper>
          <Image src={iphonemockup} />
        </LeftWrapper>

        <RightWrapper>
          <SpanText>전국의 예약 가능한 병원을 한눈에</SpanText>
          <LogoText>병원 예약은 HOSCOC에서</LogoText>
          <Text>단 한 번의 클릭으로 전국의 예약 가능한 병원을 알아보세요</Text>
          <Text>관심 병원으로 등록해 마이 페이지에서 바로 찾아보세요</Text>
          <Text>Q&A 페이지에서 궁금한 점에 대해 알아보세요</Text>
          <TextDiv>
            <TextInput placeholder={`문의 내용`} />
            <Button>문의하기</Button>
          </TextDiv>
        </RightWrapper>
      </Wrapper>
    </Fade>
  );
};

export default MM00Presenter;
