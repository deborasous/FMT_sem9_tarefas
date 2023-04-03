import React from "react";

export const Bio = (props) => {
  return (
    <div className="p-0">
      <h3>Bio</h3>
      {/* renderiza a Bio e os paragrafos passados na Bio dentro do componente Quem Sou */}
      {props.children}
    </div>
  );
};

export default Bio;
