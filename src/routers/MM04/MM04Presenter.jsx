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

const TextWrapper = styled.div`
  width: 50%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #575757;
`;

const Atext = styled.a`
  margin-top: 15px;
  color: #000;
  font-weight: 800;
  font-style: oblique;
  opacity: 0.6;
  text-decoration-line: underline;
`;

const MM04Presenter = () => {
  return (
    <Wrapper>
      <div
        id="daumRoughmapContainer1614329745141"
        class="root_daum_roughmap root_daum_roughmap_landing"
      ></div>
      <TextWrapper>
        <Atext href="mailto:faner4567@gmail.com">📨 faner4567.gmail.com</Atext>
        <Atext href="tel:+01052079626">📞 010-5207-9626 </Atext>
      </TextWrapper>
    </Wrapper>
  );
};

export default MM04Presenter;
