import React from "react";
import styled from "styled-components";
import Typist from "react-typist";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 0px 0px 40px 0px;
`;

const SearchBox = styled.div`
  width: 100%l;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const SearchInput = styled.input`
  width: ${(props) => props.width || `300px`};
  height: 25px;
  border-radius: 3px;
  margin: 0px 10px;
  padding: 0px 10px;

  outline: none;
  border: 1px solid #848484;
  background: none;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: ${(props) => props.theme.radius};

  outline: none;
  border: none;

  background-color: ${(props) => props.theme.pointColor};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;

  transition: 0.6s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.pointColor};
    color: ${(props) => props.theme.greyColor};
  }
`;

const MM06Presenter = () => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      >
        <Title>Community</Title>
      </Typist>

      <SearchBox>
        <SearchInput />
        <Button>검색</Button>
      </SearchBox>
    </Wrapper>
  );
};

export default MM06Presenter;
