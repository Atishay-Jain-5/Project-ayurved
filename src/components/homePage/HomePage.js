import React from "react";
import homepage from "./homepage.jpeg";
import ayurved from "./ayurved.jpeg";
import '@fontsource-variable/overpass';
function HomePage() {
  return (
    <div className="font-sans">
      <div className="w-screen  ">
        <div className="w-1/3 h-40 z-50 absolute mt-24 right-60 ">
          <h1 className="text-3xl font-extrabold">
            Get Your Ayurvedic <br></br>Treatment right Now
          </h1>
          <h1 className="font-large font-bold text-gray-400 mt-3">
            Ayurveda is an alternative medicine system with historical roots in
            the Indian subcontinent. It is heavily practiced in India and Nepal,
            where around 80% of the population report using ayurveda. The theory
            and practice of ayurveda is pseudoscientific.
          </h1>
        </div>
      </div>
      <div className="w-screen">
        <div className="w-6/12  h-64 mt-32 right-1/3 absolute">
          <img src={ayurved} className="w-11/12"></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
