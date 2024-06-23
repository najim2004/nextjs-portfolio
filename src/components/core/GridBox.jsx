import PropTypes from "prop-types";
import React from "react";

const GridBox = ({ children, classNames, onClick, id, elementRef }) => {
  return (
    <div
      className={`relative w-full grid grid-cols-1 sm:grid-cols-2 gap-4 transition duration-300 ease-in-out ${classNames}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

GridBox.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};
export default GridBox;
