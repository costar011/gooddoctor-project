import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../routers/layouts/Header";
import Content from "../routers/layouts/Content";
import Footer from "../routers/layouts/Footer";

const AppRouter = () => {
  return (
    <Router>
      {/* HEADER */}
      <Route path="/" component={Header} />

      {/* CONTENT */}
      <Route path="/" component={Content} />

      {/* FOOTER */}
      <Route path="/" component={Footer} />
    </Router>
  );
};
export default AppRouter;
