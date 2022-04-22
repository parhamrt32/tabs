import React, { useState, useEffect } from "react";
import "./App.css";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <section className="loadingSection"> Loading... </section>;
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2> Experience </h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-section">
        {/* btn container */}
        <div className="btns">
          {jobs.map((item, index) => {
            return (
              <button
                className={`btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
                key={item.id}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3> {title} </h3>
          <h4 className="company"> {company} </h4>
          <p className="job-date"> {dates} </p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p> {duty} </p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
