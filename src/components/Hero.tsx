import React from "react";
import Clips from "./common/Clips";
import SocialLinks from "./common/SocialLinks";

interface Videos {
  imgsrc: string;
  clip: string;
}
interface SocialLinks {
  icon: string;
}
interface Heroapi {
  title: string;
  subtitle: string;
  btnText: string;
  videos: Videos[];
  img: string;
  sociallinks: SocialLinks[];
}

const Hero = ({
  title,
  subtitle,
  btnText,
  videos,
  sociallinks,
  img,
}: Heroapi) => {
  console.log(title);
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div
          className=" bg-theme 
           clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"
        ></div>
        <div className="relative flex opacity-100 z-20 flex-col items-center justify-center nike-container">
          <div className="grid justify-items-center items-center mt-28 md:mt-24">
            <h1 className="text-6xl lg:text-5l md: text-4l sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {title}
            </h1>
            <h1 className="text-6xl lg:text-5l md: text-4l sm:text-3xl xsm:text-2xl font-extrabold  text-slate-200">
              {subtitle}
            </h1>
            <button
              type="button"
              className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5"
            >
              {btnText}
            </button>
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto ">
              {videos.map((video, index) => (
                <Clips key={index} imgsrc={video.imgsrc} clip={video.clip} />
              ))}
            </div>
            <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
              {sociallinks.map((sociallink, index) => (
                <SocialLinks key={index} icon={sociallink.icon} />
              ))}
            </div>
          </div>
          <div>
            <img
              src={img}
              alt="hero-img"
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
