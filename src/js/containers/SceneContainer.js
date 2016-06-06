import React from "react";
import { connect } from 'react-redux';

import * as actions from '../actions/acomponents';

import Abox from "../components/aframe/primitives/Abox";

@connect(state => ({
  acomponents: state.acomponents
}))
export default class SceneContainer extends React.Component {
  updateBox(id, props) {
    this.props.dispatch(actions.updateBox(id, props));
  }

  render() {
    const aboxActions = {update: ::this.updateBox};

    var acomponents = this.props.acomponents.map( function(acomponent, idx) {
      switch (acomponent.name) {
        case 'a-sphere':
          return <a-sphere key={idx} id={acomponent.id} position="0 1.25 -1" radius="1.25" color="#EF2D5E"></a-sphere>
        case 'a-box':
          return <Abox key={idx} id={acomponent.id} name={acomponent.name} properties={acomponent.properties} {...aboxActions}></Abox>
        case 'a-cylinder':
          return <a-cylinder key={idx} id={acomponent.id} position="1 0.75 1" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
        case 'a-plane':
          return <a-plane key={idx} id={acomponent.id} rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        default:
          return;
      }
    });

    return (
      <div>
      <a-scene height="500px;" gridhelper>
        {acomponents}
        <a-entity colorCenterLine="blue" size="30"></a-entity>
      </a-scene>
      </div>
    );
  }
}

// export default connect(state => ({
//   acomponents: state.acomponents
// }))(SceneContainer);
