import { useState } from "react";

import FileZone from "./FileZone";

const Home = () => {
  const [state, setState] = useState({
    data: [
      {
        text: "Start",
      },
    ],
  });

  const getSynonyms = () =>
    setState({ data: [...state.data, { text: "Jest" }] });

  return (
    <>
      <FileZone data={state.data} getSynonyms={getSynonyms} />
    </>
  );
};

export default Home;
