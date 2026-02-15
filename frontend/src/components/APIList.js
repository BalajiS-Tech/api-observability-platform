import React from "react";

const APIList = ({ apis, onSelect }) => {
  return (
    <div>
      <h3>Monitored APIs</h3>
      {apis.map((api) => (
        <div
          key={api._id}
          className="api-item"
          onClick={() => onSelect(api)}
        >
          {api.name}
        </div>
      ))}
    </div>
  );
};

export default APIList;
