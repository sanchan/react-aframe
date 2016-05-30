import React from "react";
import { connect } from 'react-redux';

import Abox from "../components/aframe/primitives/Abox";

@connect(state => ({
  acomponents: state.acomponents
}))
class SceneContainer extends React.Component {
  render() {
    var acomponents = this.props.acomponents.map( function(acomponent, idx) {
      switch (acomponent.name) {
        case 'a-sphere':
          return <a-sphere key={idx} position="0 1.25 -1" radius="1.25" color="#EF2D5E"></a-sphere>
        case 'a-box':
          return <Abox key={idx} {...acomponent.properties}></Abox>
          // return <a-box key={idx} position="-1 0.5 1" rotation="0 45 0" width="1" height="1" depth="1" color="#4CC3D9"></a-box>
        case 'a-cylinder':
          return <a-cylinder key={idx} position="1 0.75 1" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
        case 'a-plane':
          return <a-plane key={idx} rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        default:
          return;
      }
    });

    return (
      <div>
      <a-scene height="500px;">
        {acomponents}
      </a-scene>
      </div>
    );
  }
}

export default connect()(SceneContainer);
