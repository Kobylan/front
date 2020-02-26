import React from "react";
import Menu from "./components/menu";
import Logo from "./components/logo";
class Leftside extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <Menu />
      </div>
    );
  }
}

export default Leftside;
