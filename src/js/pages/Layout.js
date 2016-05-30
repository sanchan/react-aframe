import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import PanelContainer from "../containers/PanelContainer";

export default class Layout extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>
        <Nav />
        <PanelContainer></PanelContainer>
        {this.props.children}
      </div>

    );
  }
}
