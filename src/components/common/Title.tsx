import React from "react";

interface Title {
  title: string;
}

const Title = ({ title }: Title) => {
  return (
    <>
      <div className="grid items-center">
        <h1 className="text-5xl  lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-md">
          {title}
        </h1>
      </div>
    </>
  );
};

export default Title;
