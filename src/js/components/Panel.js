import React from "react";
import { connect } from 'react-redux';

import * as PanelActions from '../actions/PanelActions';

class Panel extends React.Component {
  render() {
    console.log(this.props);
    let style = {
      'position': 'relative',
      'z-index': '11111;'
    };

    return (
      <div>
        <button onClick={this.props.addSphere} style={style}>Add Sphere</button>
        <button onClick={this.props.addBox} style={style}>Add Cube</button>
      </div>
    );
  }

}

export default connect()(Panel);
