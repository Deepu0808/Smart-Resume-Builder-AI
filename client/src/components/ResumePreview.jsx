import React from "react";

function ResumePreview({ data }) {
  if (!data) return null;

  return (
    <div className="resume-preview">
      <h2>{data.name}</h2>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>

      <h3>Education</h3>
      <p>{data.education}</p>

      <h3>Skills</h3>
      <p>{data.skills}</p>

      <h3>Experience</h3>
      <p>{data.experience}</p>
    </div>
  );
}

export default ResumePreview;
