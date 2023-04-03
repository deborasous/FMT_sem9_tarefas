import React from "react";

export class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        // imprime os valores passados por  parametros (src e alt)  no componente Avatar, dentro do componente QuemSou
        src={this.props.src}
        alt={this.props.alt}
        className="img-thumbnail w-100"
      />
    );
  }
}

export default Avatar;
