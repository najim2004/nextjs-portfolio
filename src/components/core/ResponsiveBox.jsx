import React from "react";
import PropTypes from "prop-types";

const ResponsiveBox = ({ children, classNames, id, elementRef, onClick }) => {
  return (
    <div
      className={`relative flex flex-col justify-start items-start w-full h-auto p-0 mx-auto my-0 overflow-hidden transition duration-300 ease-in-out ${classNames}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

ResponsiveBox.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default ResponsiveBox;
