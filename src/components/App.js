import React, { useState, useEffect } from "react";

import ControlPanel from "./ControlPanel";
import FileZone from "./FileZone";

import { getMockText } from "../text.service";

const App = () => {
  const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  const [syn, setSynonim] = useState([]);

  useEffect(() => {
    getMockText().then(result => setData(result.split(" ")));
  }, []);

  const getSynonyms = e => {
    fetch(`https://api.datamuse.com/words?rel_syn=${e.target.innerText}`)
      .then(response => response.json())
      .then(json => setSynonim(json));

    setWord(e.target.innerText);
  };

  const replaceSynonym = e => {
    const index = data.indexOf(word.replace(/\s/g, ""));
    let items = [...data];

    items[index] = e.target.innerText;
    setData(items);
  };

  return (
    <div className="app">
      <header>
        <h4>Simple Text Editor</h4>
        <div className="file space wrap">
          {syn.map((i, j) => (
            <span key={j} onClick={replaceSynonym}>
              {i.word}{" "}
            </span>
          ))}
        </div>
      </header>
      <ControlPanel
        data={data}
        setData={setData}
        word={word}
        setWord={setWord}
      />
      <FileZone data={data} getSynonyms={getSynonyms} />
    </div>
  );
};

export default App;
