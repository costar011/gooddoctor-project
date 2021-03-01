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

const EnrollmentBox = styled.div`
  width: 100%l;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const EnrollmentInput = styled.input`
  width: ${(props) => props.width || `400px`};

  margin: 0px 10px;
  padding: 0px 10px;

  outline: none;
  background-color: none;
  border: none;
  border-bottom: 1px solid #000;
`;

const EnrollmentDescBox = styled.input`
  width: ${(props) => props.width || `800px`};
  height: ${(props) => props.height || `300px`};
  margin-left: 20px;

  outline: none;
  border: 1px solid #777;
  background: none;
`;

const MM09Presenter = () => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      >
        <Title>Enrollment</Title>
      </Typist>

      <EnrollmentBox>
        <EnrollmentInput placeholder="title..." />
      </EnrollmentBox>

      <EnrollmentBox>
        <EnrollmentDescBox placeholder="desc..." />
      </EnrollmentBox>
    </Wrapper>
  );
};

export default MM09Presenter;
