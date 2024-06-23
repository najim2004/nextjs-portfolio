import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Row from "@/components/core/Row";

const AppBar = ({ children }) => {
  return (
    <Row classNames="gap-4 items-center">
      <Link href="/" className="p-0 m-0">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-xl/6 font-semibold text-[var(--textColor)]"
        />
      </Link>

      {children ? (
        React.isValidElement(children) ? (
          children
        ) : (
          <p className="text-lg/6 font-semibold">{children}</p>
        )
      ) : null}
    </Row>
  );
};

AppBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

export default AppBar;
