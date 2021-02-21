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
`;

const TextInput = styled.input`
  width: ${(props) => props.width || `450px`};
  height: 35px;
  border-radius: 10px;
  margin: 10px 0px;
  padding: 0px 10px;
  outline: none;
  border: 1px solid ${(props) => props.theme.greyColor};
  background: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.5s;

  &:hover {
    box-shadow: 5px 5px 5px #777;
  }

  &:focus {
    box-shadow: 5px 5px 5px #777;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 0px 0px 40px 0px;
`;

const Button = styled.button`
  width: 250px;
  height: 30px;
  border-radius: ${(props) => props.theme.radius};
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.checkColor};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
  margin: 20px 0px 50px 0px;

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.checkColor};
    color: ${(props) => props.theme.checkColor};
  }
`;

const PostButton = styled.button`
  width: 140px;
  height: 30px;
  border-radius: ${(props) => props.theme.radius};
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.pointColor};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
  margin-left: 10px;

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.pointColor};
    color: ${(props) => props.theme.pointColor};
  }
`;

const MM08Presenter = (
  newEmail,
  newName,
  newNickName,
  newMobile,
  newZoneCode,
  newAddress,
  newDetailAddress,
  registUserHandler,
  searchPostHandler
) => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      >
        <Title>SIGN UP</Title>
      </Typist>

      <Fade bottom>
        <TextInput type="text" placeholder={`EMAIL...`} {...newEmail} />
        <TextInput type="text" placeholder={`NAME...`} {...newName} />
        <TextInput type="text" placeholder={`NICKNAME...`} {...newNickName} />
        <TextInput type="text" placeholder={`MOBILE...`} {...newMobile} />
        <RowWrapper>
          <TextInput
            type="text"
            width={`300px`}
            placeholder={`32603`}
            readOnly={true}
            {...newZoneCode}
          />
          <PostButton onClick={() => searchPostHandler}>검색</PostButton>
        </RowWrapper>
        <TextInput
          type="text"
          placeholder={`ADDRESS...`}
          readOnly={true}
          {...newAddress}
        />
        <TextInput
          type="text"
          placeholder={`DETAILADDRESS...`}
          {...newDetailAddress}
        />

        <Button onClick={() => registUserHandler}>SIGN UP</Button>
      </Fade>
    </Wrapper>
  );
};

export default MM08Presenter;
