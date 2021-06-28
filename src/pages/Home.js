import { useState, useEffect } from "react";

import FileZone from "../components/FileZone";
import ControlPanel from "../components/ControlPanel";

import { getDataMuse, getMuseWords } from "../services/text";

const Home = () => {
  const [state, setState] = useState({
    data: ["Start"],
    mode: null,
  });

  useEffect(() => {
    const loadMuse = async () => {
      const { message } = await getDataMuse();

      const arr = message.split(" ");

      setState({ data: [...state.data, ...arr] });
    };

    loadMuse();
  }, []);

  useEffect(() => {
    return () => setState([]);
  }, []);

  const getSynonyms = async (e) => {
    const query = e.target.innerText.replace(/,/g, "");

    const json = await getMuseWords(query);

    if (json.length > 0) {
      setState({ data: [...state.data, ...json.map((s) => s.word)] });
    }
  };

  return (
    <>
      <ControlPanel state={state} setState={setState} />
      <FileZone state={state} getSynonyms={getSynonyms} />
    </>
  );
};

export default Home;
