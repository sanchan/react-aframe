import React from "react";

import MeshAttrs from "../../components/panel/MeshAttrs";

export default class MeshAttrsContainer extends React.Component {
  render() {
    const actions = {
      onChangeColor: this.props.onChangeColor,
      onChangeMetalness: this.props.onChangeMetalness,
      onChangeOpacity: this.props.onChangeOpacity,
      onChangeRoughness: this.props.onChangeRoughness,
      onChangeShader: this.props.onChangeShader,
      onChangeSrc: this.props.onChangeSrc,
      onChangeTranslate: this.props.onChangeTranslate,
      onChangeTransparent: this.props.onChangeTransparent
    };

    return (
      <MeshAttrs {...actions}></MeshAttrs>
    )
  }
}
