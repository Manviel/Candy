const ControlPanel = ({ state, setState }) => {
  const updateState = (value) => setState({ ...state, mode: value });

  const onMarkCheck = (e) => {
    const checked = e.target.checked;

    if (checked) {
      updateState("bold");
    } else {
      updateState(null);
    }
  };

  const onMarkChange = (e) => updateState(e.target.value);

  return (
    <div className="flex control-panel">
      <section className="flex font action">
        <input type="checkbox" name="bold" id="bold" />
        <label htmlFor="bold" className="action-label">
          Bold
        </label>
      </section>

      <select
        className="font action"
        name="font-style"
        id="font-style"
        role="listbox"
      >
        <option value="">Select font style</option>
        <option value="italic">Italic</option>
        <option value="underline">Underline</option>
      </select>
    </div>
  );
};

export default ControlPanel;
