import React from "react";
import { connect } from 'react-redux';

import * as PanelActions from '../actions/acomponents';
import AddBoxContainer from '../containers/panel/AddBoxContainer';

class Panel extends React.Component {
  render() {
    const actions = {addBox: this.props.addBox};

    return (
      <div id="panel-acomponents">
        <ul>
          <li><i class="fa fa-angle-down" aria-hidden="true"></i> <span class="title">Box</span></li>
          <li class="content">
            <form>
              <AddBoxContainer {...actions}></AddBoxContainer>
            </form>
          </li>

        </ul>
      </div>
    );
  }

}

export default connect()(Panel);
