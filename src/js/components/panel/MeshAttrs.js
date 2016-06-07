import React from "react";

export default class MeshAttrs extends React.Component {
  // See https://aframe.io/docs/0.2.0/primitives/mesh-attributes.html
  static defaults = {
    color: "gray",
    metalness: "0.0",
    opacity: "1.0",
    roughness: "0.5",
    shader: "standard",
    src: "None",
    translate: "0 0 0",
    transparent: true,
  }

  render() {
    return (
      <div>
        <div class="row">
          <h3>Mesh attributes</h3>
        </div>
        <div class="row">
          <label>Color</label>
          <div class="form-value">
            <input type="text" placeholder={MeshAttrs.defaults.color} value={this.props.color}  onChange={this.props.onChangeColor} />
          </div>
        </div>
        <div class="row">
          <label>Metalness</label>
          <div class="form-value">
            <input type="text" placeholder={MeshAttrs.defaults.metalness} value={this.props.metalness}  onChange={this.props.onChangeMetalness} />
          </div>
        </div>
        <div class="row">
          <label>Opacity</label>
          <div class="form-value">
            <input type="text" placeholder={MeshAttrs.defaults.opacity} value={this.props.opacity}  onChange={this.props.onChangeOpacity} />
          </div>
        </div>
        <div class="row">
          <label>Roughness</label>
          <div class="form-value">
            <input type="text" placeholder={MeshAttrs.defaults.roughness} value={this.props.roughness}  onChange={this.props.onChangeRoughness} />
          </div>
        </div>
        <div class="row">
          <label>Shader</label>
          <div class="form-value">
            <input type="text" placeholder={MeshAttrs.defaults.shader} value={this.props.shader}  onChange={this.props.onChangeShader} />
          </div>
        </div>
        <div class="row">
          <label>Src</label>
          <div class="form-value">
            <input type="text" placeholder={MeshAttrs.defaults.src} value={this.props.src}  onChange={this.props.onChangeSrc} />
          </div>
        </div>
        <div class="row">
          <label>Translate</label>
          <div class="form-value">
            <input type="text" placeholder={MeshAttrs.defaults.translate} value={this.props.translate}  onChange={this.props.onChangeTranslate} />
          </div>
        </div>
        <div class="row">
          <label>Transparent</label>
          <div class="form-value">
            <input type="text" placeholder={MeshAttrs.defaults.transparent} value={this.props.transparent}  onChange={this.props.onChangeTransparent} />
          </div>
        </div>
      </div>
    )
  }
}
