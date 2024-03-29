const FileZone = ({ state, getSynonyms }) => (
  <div className={`file space ${state.mode || ""}`}>
    {state.data.map((word, i) => (
      <span
        key={i}
        id={i}
        onClick={getSynonyms}
        className="default"
        role="aria-label"
      >
        {word}
      </span>
    ))}
  </div>
);

export default FileZone;
