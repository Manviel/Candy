const FileZone = ({ data, getSynonyms }) => (
  <div className="file space">
    {data.map((word, i) => (
      <span key={i} id={i} onClick={getSynonyms}>
        {word.text}
      </span>
    ))}
  </div>
);

export default FileZone;
