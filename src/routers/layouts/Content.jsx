import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MM00 from "../MM00";
import MM01 from "../MM01";
import MM02 from "../MM02";
import MM03 from "../MM03";
import MM04 from "../MM04";
import MM05 from "../MM05";
import MM06 from "../MM06";
import MM07 from "../MM07";

const WholeWrapper = styled.div`
  width: 100%;
`;

const Content = () => {
  return (
    <WholeWrapper>
      <Route exact path="/" component={MM00} />
      <Route exact path="/mm01" component={MM01} />
      <Route exact path="/mm02" component={MM02} />
      <Route exact path="/mm03" component={MM03} />
      <Route exact path="/mm04" component={MM04} />
      <Route exact path="/mm05" component={MM05} />
      <Route exact path="/mm06" component={MM06} />
      <Route exact path="/mm07" component={MM07} />
    </WholeWrapper>
  );
};

export default Content;
