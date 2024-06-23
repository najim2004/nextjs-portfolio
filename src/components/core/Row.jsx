import React from "react";
import PropTypes from "prop-types";

const Row = ({ children, classNames, onClick, id, elementRef }) => {
  return (
    <div
      className={`relative flex flex-row justify-start items-start transition duration-300 ease-in-out ${classNames}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default Row;
