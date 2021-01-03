import { useContext } from "react";

import { DataContext } from "../libs/context";

const Header = () => {
  const { state, dispatch } = useContext(DataContext);

  const replaceSynonym = (e) => {
    state.data[state.id] = {
      ...state.data[state.id],
      text: e.target.innerText,
    };

    dispatch({ type: "update", payload: state.data });
  };

  return (
    state.syn.length > 0 && (
      <div className="file action space">
        {state.syn.map((i, j) => (
          <span key={j} onClick={replaceSynonym}>
            {i.word}
          </span>
        ))}
      </div>
    )
  );
};

export default Header;
