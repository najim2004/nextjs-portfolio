import PropTypes from "prop-types";
import React from "react";

const ConstraintedBox = ({ children, classNames, onClick, id, elementRef }) => {
  return (
    <div
      className={`relative flex flex-col justify-start items-start w-full constrained-width p-0 mx-auto my-0 overflow-hidden transition duration-300 ease-in-out drop_in ${classNames}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

ConstraintedBox.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default ConstraintedBox;
