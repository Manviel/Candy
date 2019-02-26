import React, { Component } from 'react';

import './ControlPanel.css';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: ''
    };
  }

  renderMark = props => {
    switch (props) {
      case 'bold':
        return <b>{props}</b>;

      case 'italic':
        return <i>{props}</i>;

      case 'underline':
        return <u>{props}</u>;

      default: {
        return;
      }
    }
  };

  onMarkClick = event => {
    const change = this.renderMark(event.target.innerText);

    this.setState(
      {
        edit: this.props.word.replace(/\s/g, '')
      },
      () => {
        const index = this.props.data.indexOf(this.state.edit);

        this.props.data[index] = `<${change.type}>${this.state.edit}</${
          change.type
        }>`;

        this.props.handleUpdateData(this.props.data);
      }
    );
  };

  render() {
    return (
      <div className="control-panel">
        <div className="format-actions">
          <button className="format-action" onClick={this.onMarkClick}>
            bold
          </button>
          <button className="format-action" onClick={this.onMarkClick}>
            italic
          </button>
          <button className="format-action" onClick={this.onMarkClick}>
            underline
          </button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
