import React from "react";
import { connect } from 'react-redux';

import * as PanelActions from '../actions/acomponents';

class Panel extends React.Component {
  handers = {
    addBox: {
      onChangeColor: function(e) {}
    }
  }
  render() {
    let style = {
      'position': 'relative',
      'z-index': '11111;'
    };

    // <button onClick={this.props.addSphere} style={style}>Add Sphere</button>

    return (
      <div id="panel-acomponents">
        <ul>
          <li><i class="fa fa-angle-down" aria-hidden="true"></i> <span class="title">Box</span></li>
          <li class="content">
            <form>
              <div class="row">
                <label>Color</label>
                <div class="form-value">
                  <input type="text" placeholder="#ff0000" />
                </div>
              </div>
              <div class="row">
                <button class="submit" onClick={this.props.addBox} style={style}>Add Cube</button>
              </div>
            </form>
          </li>

        </ul>
      </div>
    );
  }

}

export default connect()(Panel);
