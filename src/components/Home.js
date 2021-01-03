import { useEffect, useContext } from "react";

import ControlPanel from "./ControlPanel";
import FileZone from "./FileZone";

import { getDataMuse, getMuseWords } from "../services/text";
import { DataContext } from "../libs/context";

const Home = () => {
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

  return (
    <>
      <ControlPanel />
      <FileZone data={state.data} id={state.id} getSynonyms={getSynonyms} />
    </>
  );
};

export default Home;
