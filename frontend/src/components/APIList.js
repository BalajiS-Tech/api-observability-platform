import React from "react";

const APIList = ({ apis, onSelect }) => {
  return (
    <div>
      <h3>Monitored APIs</h3>
      {apis.length === 0 && <p>No APIs added yet</p>}
      {apis.map((api) => (
        <div
          key={api._id}
          className="api-item"
          onClick={() => onSelect(api)}
        >
          {api.name} – {api.url}
        </div>
      ))}
    </div>
  );
};

export default APIList;
