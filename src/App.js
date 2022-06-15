import "./App.css";
import React from "react";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import ResultsContainer from "./Components/ResultsContainer";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      headerExpanded: true,
      suggestedNames: [],
    };
  }
  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText,
      suggestedNames: inputText ? name(inputText) : [],
    });
  };
  render() {
    return (
      <div>
        <Header headerExpanded={this.state.headerExpanded} />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
