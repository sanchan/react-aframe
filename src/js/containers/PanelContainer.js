import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as PanelActions from '../actions/PanelActions';
import {addSphere as addSphereAction, addBox as addBoxAction} from '../actions/PanelActions';
import Panel from '../components/Panel';

class PanelContainer extends React.Component {

  addSphere() {
    const { dispatch } = this.props;
    dispatch(addSphereAction({color: "#FF0000"}));
  }

  addBox() {
    const { dispatch } = this.props;
    dispatch(addBoxAction({color: "#00FF00"}));
  }

  render() {
    const { dispatch } = this.props;
    // const actions = bindActionCreators(PanelActions, dispatch);
    const actions = bindActionCreators({addSphere: this.addSphere.bind(this), addBox: this.addBox.bind(this)}, dispatch);

    return (
      <div>
        <Panel {...actions} ></Panel>
      </div>
    );
  }

}

export default connect()(PanelContainer);
