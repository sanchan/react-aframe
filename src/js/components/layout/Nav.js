import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  render() {
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    return (
      <div id="header">
        <nav role="navigation">
          <span class="btn">
            <i class="fa fa-file-o" aria-hidden="true"></i>
            New Project
          </span>
          a-frame Editor
        </nav>
      </div>
    );
  }
}
