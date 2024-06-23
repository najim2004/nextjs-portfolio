import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import PageBox from "@/components/core/PageBox";
import { menuItems } from "@/data/navMenus";
import FloatingNav from "@/components/navbar/NavbarNew";
import HomeSection1 from "@/components/home/Section1";
import HomeSection2 from "@/components/home/Section2";
// import HomeSection3 from "@/components/home/Section3";
import HomeSection4 from "@/components/home/Section4";
import HomeSection5 from "@/components/home/Section5";
import HomeSection6 from "@/components/home/Section6";
import ScrollToTop from "@/components/common/ScrollToTop";

const Home = () => {
  return (
    <PageBox>
      <FloatingNav className="app_nav" navItems={menuItems} />
      <HomeSection1 id="hero" />
      <HomeSection2 id="services" />
      {/* <HomeSection3 id="experiences" /> */}
      <HomeSection4 id="skills" />
      <HomeSection5 id="projects" />
      <HomeSection6 id="contact" />
      <ScrollToTop />
    </PageBox>
  );
};

export default Home;
