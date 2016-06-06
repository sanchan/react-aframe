import React from "react";
import { connect } from 'react-redux';

import AddBox from '../../components/panel/AddBox';

export default class AddBoxContainer extends React.Component {
  componentWillMount() {
     this.setState({color: "#ff0000"});
   }

  onChangeColor(e) {
    this.setState({color: e.target.value});
  }

  onSubmit() {
    this.props.addBox(this.state)
  }

  render() {
    return (
      <AddBox {...this.state} onSubmit={::this.onSubmit} onChange={::this.onChangeColor}></AddBox>
    )
  }
}
