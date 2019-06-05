import React from "react";

const FileZone = ({ data, getSynonyms }) => {
  return (
    <article className="file-zone space">
      <div className="file space">
        {data.map((word, i) => (
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
