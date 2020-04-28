import React from "react";

import ThemeContext from "./ThemeContext";

const withTheme = Component => {
  class ThemedComponent extends React.Component {
    static contextType = ThemeContext;

    componentDidMount() {
      console.log(`current theme: ${this.context}`);
    }

    render() {
      /*
      return (
        <ThemeContext.Consumer>
          {({ theme }) => <Component theme={theme} />}
        </ThemeContext.Consumer>
      );
      */
      // OR
      return <Component themeData={this.context} />;
    }
  }

  return ThemedComponent;
};

export default withTheme;
