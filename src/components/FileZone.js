const FileZone = ({ data, id, getSynonyms }) => (
  <div className="file space">
    {data.map((word, i) => (
      <span
        key={i}
        id={i}
        onClick={getSynonyms}
        className={Number(id) === i ? word.mode.concat(" active") : word.mode}
      >
        {word.text}
      </span>
    ))}
  </div>
);

export default FileZone;
