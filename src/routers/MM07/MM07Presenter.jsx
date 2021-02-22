import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RowWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const TextInput = styled.input`
  width: ${(props) => props.width || `450px`};
  height: 35px;
  border-radius: 10px;
  margin: 0px 10px;
  padding: 0px 10px;
  outline: none;
  border: 1px solid ${(props) => props.theme.greyColor};
  background: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.5s;

  &:hover {
    box-shadow: 5px 5px 5px #0b0b0b;
  }

  &:focus {
    box-shadow: 5px 5px 5px #0b0b0b;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 0px 0px 40px 0px;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: ${(props) => props.theme.radius};
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.checkColor};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.checkColor};
    color: ${(props) => props.theme.checkColor};
  }
`;

const MM07Presenter = (
  inputEmail,
  loginClickHandler,
  assignment,
  assignmentCheckHandler
) => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      >
        <Title>SIGN IN</Title>
      </Typist>

      <Fade>
        <RowWrapper>
          <TextInput placeholder={`EMAIL…`} {...inputEmail} />
          <Button onClick={() => loginClickHandler}>LOGIN</Button>
        </RowWrapper>
      </Fade>

      <Fade>
        <RowWrapper>
          <TextInput placeholder={`SECRET CODE…`} {...assignment} />
          <Button onClick={() => assignmentCheckHandler}>인증하기</Button>
        </RowWrapper>
      </Fade>
    </Wrapper>
  );
};

export default MM07Presenter;
