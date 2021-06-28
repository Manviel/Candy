const ControlPanel = () => {
  const onMarkClick = (event) => {
    const checked = event.target.checked;
  };

  return (
    <div className="flex control-panel">
      <section className="flex font action">
        <input type="checkbox" name="bold" id="bold" onChange={onMarkClick} />
        <label htmlFor="bold" className="action-label">
          Bold
        </label>
      </section>

      <button className="font action" onClick={onMarkClick}>
        italic
      </button>
      <button className="font action" onClick={onMarkClick}>
        underline
      </button>
    </div>
  );
};

export default ControlPanel;
