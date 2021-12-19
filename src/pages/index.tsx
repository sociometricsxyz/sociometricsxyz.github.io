import { Brands, Contact, Hero } from "@components/Home";
import { PageContainer } from "@shared/Page";
import React from "react";

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Hero />
      <Brands />
      <Contact />
    </PageContainer>
  );
};

export default Home;
