import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import "./styles.css";

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (formData) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResumeData(result);
    } catch (error) {
      console.error("AI generation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>🎯 Smart Resume Builder</h1>
      <p>Create a professional resume easily using AI ✨</p>

      <div className="main-content">
        <ResumeForm onGenerate={handleGenerate} />
        <div className="preview-container">
          {loading ? (
            <p className="loading-text">Generating AI Resume...</p>
          ) : (
            <ResumePreview data={resumeData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
