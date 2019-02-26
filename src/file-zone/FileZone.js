import React from 'react';
import './FileZone.css';

const FileZone = ({ data, handleChange }) => (
  <div className="file-zone">
    <div className="file">
      {data &&
        data.map((word, i) => (
          <span
            key={i}
            onDoubleClick={handleChange}
            dangerouslySetInnerHTML={{ __html: word + ' ' }}
          />
        ))}
    </div>
  </div>
);

export default FileZone;
