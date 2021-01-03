import { useContext } from "react";

import { DataContext } from "../libs/context";

const ControlPanel = () => {
  const { state, dispatch } = useContext(DataContext);

  const onMarkClick = (event) => {
    const id = state.id;
    const query = document.getElementById(id);
    const change = event.target.innerText;

    if (query.classList.contains(change)) {
      query.classList.remove(change);
    } else {
      query.classList.add(change);
    }

    query.classList.remove("active");

    state.data[id] = {
      ...state.data[id],
      mode: query.classList.toString(),
    };

    dispatch({ type: "update", payload: state.data });
  };

  return (
    <section className="control-panel">
      <button className="font action" onClick={onMarkClick}>
        bold
      </button>
      <button className="font action" onClick={onMarkClick}>
        italic
      </button>
      <button className="font action" onClick={onMarkClick}>
        underline
      </button>
    </section>
  );
};

export default ControlPanel;
