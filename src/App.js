import React, { Component } from 'react';
import './App.css';
import ControlPanel from './control-panel/ControlPanel';
import FileZone from './file-zone/FileZone';
import getMockText from './text.service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      word: null
    };
  }

  componentDidMount() {
    getMockText().then(result => {
      this.setState({ data: result.split(' ') });
    });
  }

  handleChange = event => this.setState({ word: event.target.innerText });

  handleUpdateData = value => this.setState({ data: value });

  render() {
    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel
            data={this.state.data}
            word={this.state.word}
            handleChange={this.handleChange}
            handleUpdateData={this.handleUpdateData}
          />
          <FileZone data={this.state.data} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default App;
