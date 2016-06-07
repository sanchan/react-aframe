import React from "react";
import { connect } from 'react-redux';

import AddBox from '../../components/panel/AddBox';

export default class AddBoxContainer extends React.Component {
  componentWillMount() {
     this.setState(AddBox.defaults);
  }

  // Actions
  onChangeColor(e){
    console.log("change color");
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

  onSubmit() {
    this.props.addBox(this.state);
  }

  render() {
    const actions = {
      onChangeColor: ::this.onChangeColor,
      onChangeMetalness: ::this.onChangeMetalness,
      onChangeOpacity: ::this.onChangeOpacity,
      onChangeRoughness: ::this.onChangeRoughness,
      onChangeShader: ::this.onChangeShader,
      onChangeSrc: ::this.onChangeSrc,
      onChangeTranslate: ::this.onChangeTranslate,
      onChangeTransparent: ::this.onChangeTransparent,
      onSubmit: ::this.onSubmit
    };

    return (
      <AddBox {...actions}></AddBox>
    )
  }
}
