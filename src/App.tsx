import React from "react";
import { Hero, Sales } from "./components";
import { heroapi, popularsales, toprateslaes } from "./data/data";

const App = () => {
  return (
    <div className="flex flex-col gap-16">
      <Hero
        title={heroapi.title}
        subtitle={heroapi.subtitle}
        img={heroapi.img}
        btnText={heroapi.btntext}
        videos={heroapi.videos}
        sociallinks={heroapi.sociallinks}
      />
      <Sales
        title={popularsales.title}
        items={popularsales.items}
        isPopularSalesContainer={true}
      />
      <Sales title={toprateslaes.title} items={toprateslaes.items} />
    </div>
  );
};

export default App;
