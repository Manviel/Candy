import React, { useContext } from "react";

import { DataContext } from "../context";

const ControlPanel = props => {
  const { state, dispatch } = useContext(DataContext);

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

    const index = state.data.indexOf(props.word.replace(/\s/g, ""));

    const change = renderMark(event.target.innerText);

    if (index > -1) {
      state.data[index] = `<${change.type}>${props.word}</${change.type}>`;

      dispatch({ type: "update", payload: state.data });
    }
  };

  return (
    <article className="control-panel">
      <button className="action" onClick={onMarkClick}>
        bold
      </button>
      <button className="action" onClick={onMarkClick}>
        italic
      </button>
      <button className="action" onClick={onMarkClick}>
        underline
      </button>
    </article>
  );
};

export default ControlPanel;
