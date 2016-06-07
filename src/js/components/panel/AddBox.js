import React from "react";

import ComponentAttrs from './ComponentAttrs';
import MeshAttrs from './MeshAttrs';

export default class AddBox extends React.Component {
  static defaults = {
    depth: "1.0",
    height: "1.0",
    width: "1.0"
  }

  render() {
    return (
      <div>
        <ComponentAttrs {...this.props.componentsActions}></ComponentAttrs>
        <MeshAttrs {...this.props.meshActions}></MeshAttrs>
        <div class="row">
          <h3>Box attributes</h3>
        </div>
        <div class="row">
          <label>Depth</label>
          <div class="form-value">
            <input type="text" placeholder={AddBox.defaults.depth} value={this.props.depth}  onChange={this.props.onChangeDepth} />
          </div>
        </div>
        <div class="row">
          <label>Height</label>
          <div class="form-value">
            <input type="text" placeholder={AddBox.defaults.height} value={this.props.height}  onChange={this.props.onChangeHeight} />
          </div>
        </div>
        <div class="row">
          <label>Width</label>
          <div class="form-value">
            <input type="text" placeholder={AddBox.defaults.width} value={this.props.width}  onChange={this.props.onChangeWidth} />
          </div>
        </div>
        <div class="row">
          <button class="submit" onClick={this.props.onSubmit}>Add Box</button>
        </div>
      </div>
    )
  }
}
