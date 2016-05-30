import React from "react";

export default class ABox extends React.Component {
  render() {
    let properties = Object.assign({
      position:"-1 0.5 1",
      rotation:"0 45 0",
      width:"1",
      height:"1",
      depth:"1",
      color:"#4CC3D9"
    }, this.props);

    return (
      <a-box {...properties}></a-box>
    );
  }

}
