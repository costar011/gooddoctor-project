import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../routers/layouts/Header";
import Footer from "../routers/layouts/Footer";
import MM00 from "../routers/MM00";
import MM01 from "../routers/MM01";
import MM02 from "../routers/MM02";
import MM03 from "../routers/MM03";
import MM04 from "../routers/MM04";
import MM05 from "../routers/MM05";
import MM06 from "../routers/MM06";
import MM07 from "../routers/MM07";
import MM08 from "../routers/MM08";
import MM09 from "../routers/MM09";

const WholeWrapper = styled.div`
  width: 100%;
`;

const FirstWrapper = styled.div`
  background: linear-gradient(to right, #acd7d6, #eef8f6);
`;

const AppRouter = () => {
  return (
    <WholeWrapper>
      <Router>
        <FirstWrapper>
          {/* HEADER */}
          <Route path="/" component={Header} />

          {/* CONTENT */}
          <Route exact path="/" component={MM00} />
        </FirstWrapper>
        <Route exact path="/" component={MM01} />
        <Route exact path="/" component={MM02} />
        <Route exact path="/mm03" component={MM03} />
        <Route exact path="/mm04" component={MM04} />
        <Route exact path="/mm05" component={MM05} />
        <Route exact path="/mm06" component={MM06} />
        <Route exact path="/mm07" component={MM07} />
        <Route exact path="/mm08" component={MM08} />
        <Route exact path="/mm09" component={MM09} />

        {/* FOOTER */}
        <Route path="/" component={Footer} />
      </Router>
    </WholeWrapper>
  );
};
export default AppRouter;
