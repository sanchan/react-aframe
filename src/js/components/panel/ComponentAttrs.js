import React from "react";

// This defines the class for the a-frame's components (a reusable module that is plugged
// into entities in order to provide appearance, behavior, and/or functionality)
export default class ComponentAttrs extends React.Component {
  // See https://aframe.io/docs/0.2.0/primitives/mesh-attributes.html
  static defaults = {
    position: "0 0 0",
    rotation: "0 0 0",
    scale: "1 1 1"
  }

  render() {
    return (
      <div>
        <div class="row">
          <h3>Component attributes</h3>
        </div>
        <div class="row">
          <label>Position</label>
          <div class="form-value">
            <input type="text" placeholder={ComponentAttrs.defaults.position} value={this.props.position}  onChange={this.props.onChangePosition} />
          </div>
        </div>
        <div class="row">
          <label>Rotation</label>
          <div class="form-value">
            <input type="text" placeholder={ComponentAttrs.defaults.rotation} value={this.props.rotation}  onChange={this.props.onChangeRotation} />
          </div>
        </div>
        <div class="row">
          <label>Scale</label>
          <div class="form-value">
            <input type="text" placeholder={ComponentAttrs.defaults.scale} value={this.props.scale}  onChange={this.props.onChangeScale} />
          </div>
        </div>
      </div>
    )
  }
}
