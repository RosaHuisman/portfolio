import React from "react";
import "./styles.scss";

const SectionTitle = ({ title }) => {
    console.log(title);
    return (
      <div className="section-title">
        <div className="line"></div>
        <h2> { title } </h2>
        <div className="line"></div>
      </div>
    );
  };
  
  export default SectionTitle;
  