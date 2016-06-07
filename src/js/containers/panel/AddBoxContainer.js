import React from "react";
import { connect } from 'react-redux';

import AddBox from '../../components/panel/AddBox';

export default class AddBoxContainer extends React.Component {
  componentWillMount() {
     this.setState(AddBox.defaults);
  }

  // Ok... this is tricky... lets explain it :)
  // attr is the attribute we can set
  // this returns a function that accepts an event that is going to be given by an input
  // and this function is binded to this, so we are setting the state of this AddBoxContainer
  // So, setting the attr value we are indicating "which attribute" to set, and with the e
  // (given by an input) we saying "which value" to set.
  // onChangeAttr(attr) {
  //   return (function(e){
  //     let attrs = {};
  //     attrs[attr] = e.target.value;
  //     this.setState(attrs);
  //   }).bind(this)
  // }

  // Mesh Actions
  onChangeColor(e){
    console.log("color");
    this.setState({color: e.target.value});
  }

  onChangeMetalness(e){
    this.setState({metalness: e.target.value});
  }

  onChangeOpacity(e){
    this.setState({opacity: e.target.value});
  }

  onChangeRoughness(e){
    this.setState({roughness: e.target.value});
  }

  onChangeShader(e){
    this.setState({shader: e.target.value});
  }

  onChangeSrc(e){
    this.setState({src: e.target.value});
  }

  onChangeTranslate(e){
    this.setState({translate: e.target.value});
  }

  onChangeTransparent(e){
    this.setState({transparent: e.target.value});
  }

  // Box Actions
  onChangeDepth(e){
    this.setState({depth: e.target.value});
  }

  onChangeHeight(e){
    this.setState({height: e.target.value});
  }

  onChangeWidth(e){
    this.setState({width: e.target.value});
  }

  // Submit Action
  onSubmit() {
    this.props.addBox(this.state);
  }

  render() {
    const meshActions = {
      onChangeColor: ::this.onChangeColor,
      onChangeMetalness: ::this.onChangeMetalness,
      onChangeOpacity: ::this.onChangeOpacity,
      onChangeRoughness: ::this.onChangeRoughness,
      onChangeShader: ::this.onChangeShader,
      onChangeSrc: ::this.onChangeSrc,
      onChangeTranslate: ::this.onChangeTranslate,
      onChangeTransparent: ::this.onChangeTransparent
    };

    const boxActions = {
      onChangeDepth: ::this.onChangeDepth,
      onChangeHeight: ::this.onChangeHeight,
      onChangeWidth: ::this.onChangeWidth
    };

    return (
      <AddBox meshActions={meshActions} {...boxActions} onSubmit={::this.onSubmit}></AddBox>
    )
  }
}
