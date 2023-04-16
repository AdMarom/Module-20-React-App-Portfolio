import React from 'react';
import { useState, useEffect } from "react";
import resume from "../../assets/Resume.pdf"

const Resume = () => {

  const [downloading, setDownloading] = useState(false);
  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Adena_Marom_Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <div>
        <p>
          Technical Skills:
          Proficiency in one or more server-side programming languages
          Proficiency in one or more client-side programming languages (such as HTML, CSS, and JavaScript)
          Experience with web application frameworks (such as React)
          Familiarity with database technologies (such as MySQL & MongoDB)
          Experience with version control tools (such as Git)
          Understanding of web services
          Understanding of server architecture and deployment
          <br></br>
          <br></br>
          Soft Skills:
          Strong problem-solving skills
          Ability to work independently and as part of a team
          Strong communication skills
          Ability to prioritize and manage multiple tasks simultaneously
          Attention to detail
          Willingness to learn and adapt to new technologies and tools
          Time management and organizational skills
        </p>
      </div>
      <div className="buttonContainer">
        <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
          {downloading ? "Downloading..." : "Download Resume"}
        </button>{" "}
      </div>
    </div>
  );
}
export default Resume;
