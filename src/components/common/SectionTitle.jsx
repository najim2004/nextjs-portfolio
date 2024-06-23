import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ children }) => {
  return (
    <p className="text-center mx-auto text-3xl/6 md:text-4xl/6 font-bold">
      {children}
    </p>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
