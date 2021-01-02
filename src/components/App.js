import React, { useEffect, useContext } from "react";

import ControlPanel from "./ControlPanel";
import FileZone from "./FileZone";

import { getDataMuse, getMuseWords } from "../services/text";
import { DataContext } from "../context";

const App = () => {
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    getDataMuse().then((result) => {
      const arr = result.message.split(" ").map((i) => ({
        text: i,
        mode: "default",
      }));

      dispatch({ type: "update", payload: arr });
    });
  }, [dispatch]);

  const getSynonyms = (e) => {
    const query = e.target.innerText;
    const index = e.target.getAttribute("id");

    getMuseWords(query).then((json) =>
      dispatch({
        type: "create",
        payload: {
          id: index,
          syn: json,
        },
      })
    );
  };

  const replaceSynonym = (e) => {
    state.data[state.id] = {
      ...state.data[state.id],
      text: e.target.innerText,
    };

    dispatch({ type: "update", payload: state.data });
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="font">Simple Text Editor</h1>
        {state.syn.length > 0 && (
          <div className="file action space">
            {state.syn.map((i, j) => (
              <span key={j} onClick={replaceSynonym}>
                {i.word}
              </span>
            ))}
          </div>
        )}
      </header>
      <ControlPanel />
      <FileZone data={state.data} id={state.id} getSynonyms={getSynonyms} />
    </div>
  );
};

export default App;
