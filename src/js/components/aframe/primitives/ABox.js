import React, {PropTypes} from "react";

export default class ABox extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    properties: PropTypes.object.isRequired
  }

  static defaultProperties = {
    position:"-1 0.5 1",
    rotation:"0 45 0",
    width:"1",
    height:"1",
    depth:"1",
    color:"#4CC3D9"
  }

  componentDidMount() {
    let self = this;
    setTimeout(function () {
      let properties = Object.assign({
        position:"-1 0.5 1",
        rotation:"0 45 0",
        width:"1",
        height:"1",
        depth:"1",
        color:"#FF0000"
      });
      // self.props.update(self.props.id, properties);
    }, 2000);
  }

  render() {
    let properties = Object.assign(ABox.defaultProperties, this.props.properties);

    return (
      <a-box {...properties}></a-box>
    );
  }
}
