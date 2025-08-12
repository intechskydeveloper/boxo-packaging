import React from "react";
import VideoSection from "../../Common/VideoSection";

const Promotion = () => {
  return (
    <section
      className="flex flex-col w-full max-w-[1370px] py-20 mx-auto items-center"
      id="promotion"
    >
      <div className="w-full">
        <div className="w-1/2">
          <h2 className="font-instruction"></h2>
        </div>
        <div className="w-1/2"></div>
      </div>
      <VideoSection />
    </section>
  );
};

export default Promotion;
