import React from "react";

const ControlPanel = props => {
  const renderMark = props => {
    switch (props) {
      case "bold":
        return <b>{props}</b>;

      case "italic":
        return <i>{props}</i>;

      case "underline":
        return <u>{props}</u>;

      default: {
        return;
      }
    }
  };

  const onMarkClick = event => {
    props.setWord(props.word);

    const index = props.data.indexOf(props.word.replace(/\s/g, ""));

    const change = renderMark(event.target.innerText);

    if (index > -1) {
      props.data[index] = `<${change.type}>${props.word}</${change.type}>`;

      props.setData(props.data);
    }
  };

  return (
    <article className="control-panel">
      <div className="format-actions">
        <button className="format-action" onClick={onMarkClick}>
          bold
        </button>
        <button className="format-action" onClick={onMarkClick}>
          italic
        </button>
        <button className="format-action" onClick={onMarkClick}>
          underline
        </button>
      </div>
    </article>
  );
};

export default ControlPanel;
