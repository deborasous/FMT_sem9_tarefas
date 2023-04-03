import React from "react";

export class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-0">
        <h3>Bio</h3>
        {/* renderiza a Bio e os paragrafos passados na Bio dentro do componente Quem Sou */}
        {this.props.children}
      </div>
    );
  }
}

export default Bio;
