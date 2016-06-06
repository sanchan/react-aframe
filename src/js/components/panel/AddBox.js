import React from "react";

export default class AddBoxContainer extends React.Component {
  render() {
    return (
      <div>
        <div class="row">
          <label>Color</label>
          <div class="form-value">
            <input type="text" placeholder="#ff0000" value={this.props.color}  onChange={this.props.onChange} />
          </div>
        </div>
        <div class="row">
          <button class="submit" onClick={this.props.onSubmit}>Add Cube</button>
        </div>
      </div>
    )
  }
}
