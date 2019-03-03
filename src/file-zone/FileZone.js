import React from 'react';
import './FileZone.css';

const FileZone = ({ data, handleChange, getSynonyms }) => (
  <div className="file-zone space">
    <div className="file space">
      {data &&
        data.map((word, i) => (
          <span
            key={i}
            onClick={getSynonyms}
            onDoubleClick={handleChange}
            dangerouslySetInnerHTML={{ __html: word + ' ' }}
          />
        ))}
    </div>
  </div>
);

export default FileZone;
