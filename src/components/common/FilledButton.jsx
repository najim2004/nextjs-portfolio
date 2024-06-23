"use client";

import React from "react";
import PropTypes from "prop-types";

const AppFilledButton = ({ label, onClick, classNames, name }) => {
  return (
    <button
      name={name || "filled-btn"}
      type="button"
      className={`app__filled_btn ${classNames}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

AppFilledButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  classNames: PropTypes.string,
  name: PropTypes.string,
};

AppFilledButton.defaultProps = {
  classNames: "",
  name: "filled-btn",
};

export default AppFilledButton;
