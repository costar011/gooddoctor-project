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

const SearchList = styled.div`
  width: ${(props) => props.width || `1300px`};
  height: ${(props) => props.height || `400px`};
  margin-left: 20px;

  outline: none;
  border: 1px solid #777;
  background: none;
`;

const SearchInput = styled.input`
  width: ${(props) => props.width || `400px`};

  margin: 0px 10px;
  padding: 0px 10px;

  outline: none;
  background-color: none;
  border: none;
  border-bottom: 1px solid #000;
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
        <SearchInput placeholder="제목검색..." />
        <Button onClick={() => alert("검색이 완료됨")}>검색</Button>
      </SearchBox>

      <SearchBox>
        <SearchList />
      </SearchBox>
    </Wrapper>
  );
};

export default MM06Presenter;
