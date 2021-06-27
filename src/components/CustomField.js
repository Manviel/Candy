import { Field } from "react-final-form";

const CustomField = ({ name, label, type }) => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <div className="column form-group">
          <label className="form-label" htmlFor={name}>
            {label}
          </label>
          <input type={type} className="form-control" id={name} {...input} />
          {(meta.error || meta.submitError) && meta.touched && (
            <span className="form-error">{meta.error || meta.submitError}</span>
          )}
        </div>
      )}
    </Field>
  );
};

export default CustomField;
