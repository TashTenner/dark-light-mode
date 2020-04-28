import React from "react";

import Card from "./Card";
import ThemeContext from "./ThemeContext";

const Section = () => <Card />;
const Container = () => <Section />;

class App extends React.Component {
  state = {
    theme: "dark",
    themes: ["light", "dark"]
  };

  switchTheme = () => {
    const newTheme = this.state.theme === "dark" ? "default" : "dark";
    this.setState({
      theme: newTheme
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.switchTheme}>Switch theme</button>
        {/* <Container theme={this.state.theme} /> */}

        <ThemeContext.Provider value={this.state}>
          <Container />
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default App;
