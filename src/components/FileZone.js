const FileZone = ({ data, getSynonyms }) => (
  <div className="file space">
    {data.map((word, i) => (
      <span key={i} id={i} onClick={getSynonyms} className="default">
        {word}
      </span>
    ))}
  </div>
);

export default FileZone;
