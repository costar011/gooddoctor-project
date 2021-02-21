import React from "react";
import styled from "styled-components";
import iphonemockup from "../../img/iphonemockup.png";

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

const TextInput = styled.input`
  width: ${(props) => props.width || `450px`};
  height: 35px;
  border-radius: 10px;
  margin-top: 20px;
  padding: 0px 10px;
  outline: none;
  border: 1px solid ${(props) => props.theme.greyColor};
  background-color: ${(props) => props.theme.greyColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.5s;

  &:hover {
    box-shadow: 5px 5px 5px #0b0b0b;
  }

  &:focus {
    box-shadow: 5px 5px 5px #0b0b0b;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: ${(props) => props.theme.radius};
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.subThemeColor};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.checkColor};
    color: ${(props) => props.theme.checkColor};
  }
`;

const MM00Presenter = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Image src={iphonemockup} />
      </LeftWrapper>
      <RightWrapper>
        <SpanText>획기적인 상품 세상에서 제일 가는 포테이토칩</SpanText>
        <LogoText>정예림은 정말로 바보입니다</LogoText>
        <Text>
          안녕 클레오파트라 세상에서 제일 가는 포테이토칩 으레로러ㅏ래데러딩
        </Text>
        <Text>
          안녕 클레오파트라 세상에서 제일 가는 포테이토칩 을대몯랴베ㅓㄹ댜러
        </Text>
        <Text>
          안녕 클레오파트라 세상에서 제일 가는 포테이토칩 ㅇㄹ머ㅑ대ㅔㅓ럄ㄷ
        </Text>
        <TextInput placeholder={`EMAIL…`} />
        <Button>문의하기</Button>
      </RightWrapper>
    </Wrapper>
  );
};

export default MM00Presenter;
