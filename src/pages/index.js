import React from "react";
import Header from "../components/Header";
import Repos from '../components/Repos'
import Cursos from "../components/Cursos";
import Form from '../components/Contact.form';
import Footer from "../components/Footer";
import EducationNav from "../components/Education-nav";

{/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}

export default ()=>   
  <div className="backGindex">
    <Header />
    <EducationNav />
    <Repos />
    <Cursos />
    <Form />
    <Footer />
  </div>

