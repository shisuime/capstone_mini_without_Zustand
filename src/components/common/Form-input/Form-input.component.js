import "./Form-input.styles.scss";

const FormInput = ({ label, onChange, ...otherprops }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherprops} onChange={onChange} />
      {label && (
        <label
          className={`${
            otherprops.value && otherprops.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
