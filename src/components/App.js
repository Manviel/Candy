import React, { useState, useEffect, useContext } from "react";

import ControlPanel from "./ControlPanel";
import FileZone from "./FileZone";

import { getMockText } from "../text.service";
import { DataContext } from "../context";

const App = () => {
  const { state, dispatch } = useContext(DataContext);

  const [word, setWord] = useState("");
  const [syn, setSynonim] = useState([]);

  useEffect(() => {
    getMockText().then(result =>
      dispatch({ type: "update", payload: result.split(" ") })
    );
  }, [dispatch]);

  const getSynonyms = e => {
    fetch(`https://api.datamuse.com/words?rel_syn=${e.target.innerText}`)
      .then(response => response.json())
      .then(json => setSynonim(json));

    setWord(e.target.innerText);
  };

  const replaceSynonym = e => {
    const index = state.data.indexOf(word.replace(/\s/g, ""));

    state.data[index] = e.target.innerText;

    dispatch({ type: "update", payload: state.data });
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="font">Simple Text Editor</h1>
        <div className="file action space">
          {syn.map((i, j) => (
            <span key={j} onClick={replaceSynonym}>
              {i.word}{" "}
            </span>
          ))}
        </div>
      </header>
      <ControlPanel word={word} setWord={setWord} />
      <FileZone getSynonyms={getSynonyms} />
    </div>
  );
};

export default App;
