import React from "react";
import { Hero, Sales } from "./components";
import { heroapi } from "./data/data";

const App = () => {
  return (
    <div>
      <Hero
        title={heroapi.title}
        subtitle={heroapi.subtitle}
        img={heroapi.img}
        btnText={heroapi.btntext}
        videos={heroapi.videos}
        sociallinks={heroapi.sociallinks}
      />
      <Sales />
    </div>
  );
};

export default App;
