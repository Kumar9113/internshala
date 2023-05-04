import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ShowDetails.css"

function ShowDetails() {
  const { id } = useParams();
  const [summary, setSummary] = useState("");

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setSummary(data.summary.replace(/<\/?p>/g ,"")));
  }, [id]);

  return (
    <div className="summary">
      <h1>Show Summary</h1>
      <p>{summary}</p>
    </div>
  );
}

export default ShowDetails;
