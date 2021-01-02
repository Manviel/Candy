import React from "react";

const FileZone = ({ data, id, getSynonyms }) => {
  return (
    <article className="file-zone space">
      <div className="file space">
        {data.map((word, i) => (
          <span
            key={i}
            id={i}
            onClick={getSynonyms}
            className={
              Number(id) === i ? word.mode.concat(" active") : word.mode
            }
          >
            {word.text}
          </span>
        ))}
      </div>
    </article>
  );
};

export default FileZone;
