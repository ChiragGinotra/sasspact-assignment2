import PropTypes from "prop-types";

const FormRowVertical = ({ label, error, children }) => {
  return (
    <div className="flex flex-col gap-2 py-[1rem]">
      {label && (
        <label htmlFor={children.props.id} className="font-semibold">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
};

FormRowVertical.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormRowVertical;
