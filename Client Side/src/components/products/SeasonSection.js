import React from "react";
import "./../../assets/styles/SeasonSection.css";
import SeasonSection1 from "./../../assets/styles/SeasonSectionImg/SeasonSectionImage1.gif";
import SeasonSection2 from "./../../assets/styles/SeasonSectionImg/SeasonSectionImage2.jpg";
import SeasonSection3 from "./../../assets/styles/SeasonSectionImg/SeasonSectionImage3.jpg";

export default function SeasonSection() {
  return (
    <section className="season-section">
      <a href="#">
        <img src={SeasonSection1} alt="season1" />
      </a>
      <a href="#">
        <img src={SeasonSection2} alt="season2" />
      </a>
      <a href="#">
        <img src={SeasonSection3} alt="season3" />
      </a>
    </section>
  );
}
