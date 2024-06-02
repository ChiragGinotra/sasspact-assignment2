import PropTypes from "prop-types";
import classNames from "classnames";

const Form = ({ children, type, ...props }) => {
  const formClass = classNames({
    "w-full py-[1.5rem] px-[3rem] bg-grey-0 border border-grey-100 rounded-lg":
      type === "regular",
    "w-[80rem]": type === "modal",
    "overflow-hidden text-base": true,
    "font-size": "1.4rem",
  });

  return (
    <form className={formClass} {...props}>
      {children}
    </form>
  );
};

Form.defaultProps = {
  type: "regular",
};

Form.propTypes = {
  type: PropTypes.oneOf(["regular", "modal"]),
  children: PropTypes.node.isRequired,
};

export default Form;
