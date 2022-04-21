import React, { useState, useEffect } from "react";
import "./App.css";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <section className="loadingSection"> Loading... </section>;
  }
  return <div className="App">Jobs</div>;
}

export default App;
