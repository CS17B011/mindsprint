import React from "react";
import "./DownloadCard.css";

function DownloadCard({ id, name, username }) {
  return (
    <div className="download-card">
      <h4 className="download-name">{name}</h4>
      <h5 className="download-year">Year : {id}</h5>
      <h6 className="download-type">Type : {username}</h6>
      <a href="" className="download-button">
        DOWNLOAD {"  "}
      </a>
    </div>
  );
}

export default DownloadCard;
