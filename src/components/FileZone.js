import React, { useContext } from "react";

import { DataContext } from "../context";

const FileZone = ({ getSynonyms }) => {
  const { state } = useContext(DataContext);

  return (
    <article className="file-zone space">
      <div className="file space">
        {state.data.map((word, i) => (
          <span
            key={i}
            onClick={getSynonyms}
            dangerouslySetInnerHTML={{ __html: word + " " }}
          />
        ))}
      </div>
    </article>
  );
};

export default FileZone;
