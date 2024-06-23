import React from "react";
import PropTypes from "prop-types";

const PageBox = ({ children, classNames }) => {
  return (
    <div
      className={`relative flex flex-col justify-start items-start w-screen max-w-full p-0 m-0 overflow-hidden transition duration-300 ease-in-out ${classNames}`}
    >
      {children}
    </div>
  );
};

PageBox.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
};

export default PageBox;
