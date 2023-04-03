import React from "react";

export const Avatar = (props) => {
  return (
    <img
      // imprime os valores passados por  parametros (src e alt)  no componente Avatar, dentro do componente QuemSou
      src={props.src}
      alt={props.alt}
      className="img-thumbnail w-100"
    />
  );
};

export default Avatar;
