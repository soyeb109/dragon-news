import React from "react";
import classImage from "../../assets/class.png";
import swimmingImage from "../../assets/swimming.png";
import playImage from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5">
        <img src={swimmingImage} alt="swimming" />
        <img src={classImage} alt="class" />
        <img src={playImage} alt="playground" />
      </div>
    </div>
  );
};

export default QZone;
