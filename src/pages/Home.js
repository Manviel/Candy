import { useState, useEffect } from "react";

import FileZone from "../components/FileZone";

import { getDataMuse, getMuseWords } from "../services/text";

const Home = () => {
  const [state, setState] = useState({
    data: ["Start"],
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
      <FileZone data={state.data} getSynonyms={getSynonyms} />
    </>
  );
};

export default Home;
