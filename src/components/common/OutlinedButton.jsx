"use client";

import React from "react";
import PropTypes from "prop-types";

const AppOutlinedButton = ({ label, onClick, classNames, name }) => {
  return (
    <button
      name={name || "outlined-btn"}
      type="button"
      className={`app__outlined_btn ${classNames}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

AppOutlinedButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  classNames: PropTypes.string,
  name: PropTypes.string,
};

AppOutlinedButton.defaultProps = {
  classNames: "",
  name: "outlined-btn",
};

export default AppOutlinedButton;
