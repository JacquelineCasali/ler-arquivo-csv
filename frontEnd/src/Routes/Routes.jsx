import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../page/Home";
import Footer from "../components/Footer/Footer";
import Hearder from "../components/Hearder/Hearder";
import Container from "../components/Container/Container";
import Error from "../page/Error/Error";


const AppRoutes = () => {
  return (
    <Router>
     <Hearder/>
   <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      
    <Route path="*" element={<Error />} />
    </Routes>
    </Container>
    <Footer/>
  </Router>
  );
};
export default AppRoutes;
