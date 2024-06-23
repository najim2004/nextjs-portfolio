import React from "react";
import PropTypes from "prop-types";

const ProjectsLayout = ({ children }) => {
  return <section>{children}</section>;
};

ProjectsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectsLayout;
