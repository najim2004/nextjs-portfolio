import PropTypes from "prop-types";
import React from "react";

const Column = ({ children, classNames, onClick, id, elementRef }) => {
  return (
    <div
      className={`relative flex flex-col justify-start items-start transition duration-300 ease-in-out ${classNames}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default Column;
