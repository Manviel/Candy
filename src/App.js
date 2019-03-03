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
      word: null,
      syn: null
    };
  }

  componentDidMount() {
    getMockText().then(result => {
      this.setState({ data: result.split(' ') });
    });
  }

  getSynonyms = e => {
    fetch(`https://api.datamuse.com/words?rel_syn=${e.target.innerText}`)
      .then(response => response.json())
      .then(json => this.setState({ syn: json }));
  };

  handleChange = event => this.setState({ word: event.target.innerText });

  handleUpdateData = value => this.setState({ data: value });

  render() {
    const { syn } = this.state;
    return (
      <div className="App">
        <header>
          <h4>Simple Text Editor</h4>
          <div className="file space wrap">
            {syn && syn.map(i => <span key={i.score}>{i.word} </span>)}
          </div>
        </header>
        <main>
          <ControlPanel
            data={this.state.data}
            word={this.state.word}
            handleChange={this.handleChange}
            handleUpdateData={this.handleUpdateData}
          />
          <FileZone
            data={this.state.data}
            handleChange={this.handleChange}
            getSynonyms={this.getSynonyms}
          />
        </main>
      </div>
    );
  }
}

export default App;
