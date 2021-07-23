import React, { Fragment } from "react";
import NurdCertificates from "../components/HomePageComponents/NurdCertificates";
import NurdFooter from "../components/HomePageComponents/NurdFooter";
import NurdHeader from "../components/HomePageComponents/NurdHeader";
import NurdHomeContent from "../components/HomePageComponents/NurdHomeContent";
import NurdSkills from "../components/HomePageComponents/NurdSkills";

export default function MainPage() {
  return (
    <Fragment className="App">
      <NurdHeader />
      <NurdHomeContent />
      <NurdSkills />
      <NurdCertificates />
      <NurdFooter />
    </Fragment>
  );
}
