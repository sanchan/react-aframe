import React from "react";

import MeshAttrsContainer from '../../containers/panel/MeshAttrsContainer';

export default class AddBox extends React.Component {
  static defaults = {

  }

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
      <div>
        <MeshAttrsContainer {...actions}></MeshAttrsContainer>
        <div class="row">
          <button class="submit" onClick={this.props.onSubmit}>Add Box</button>
        </div>
      </div>
    )
  }
}
