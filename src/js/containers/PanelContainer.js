import React, {PropTypes} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as PanelActions from '../actions/PanelActions';
import * as actions from '../actions/acomponents';
import Panel from '../components/Panel';

@connect()
export default class PanelContainer extends React.Component {
  addSphere() {
    this.props.dispatch(actions.addSphere({color: "#FF0000"}));
  }

  addBox() {
    this.props.dispatch(actions.addBox({color: "#00FF00"}));
  }

  render() {
    // const actions = bindActionCreators({addSphere: this.addSphere.bind(this), addBox: this.addBox.bind(this)}, this.dispatch);
    const actions = {addSphere: ::this.addSphere, addBox: ::this.addBox};

    return (
      <div>
        <Panel {...actions} ></Panel>
      </div>
    );
  }

}

// export default connect(state => ({
//   algo: state.acomponents
// }))(PanelContainer);
