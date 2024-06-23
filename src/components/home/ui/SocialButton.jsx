import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SocialButton = ({ text, icon, url }) => {
  return (
    <Link
      href={url || "#"}
      target="_blank"
      className="relative flex flex-row bg-[var(--textColor10)] p-4 rounded-[var(--borderRadius)] items-center text-center justify-center gap-2 cursor-pointer animated__hover"
    >
      <span className="text-xl/6 text-[var(--textColor)]">
        <FontAwesomeIcon icon={icon} />
      </span>
      <p className="text-lg/6 font-semibold text-[var(--textColor)]">{text}</p>
    </Link>
  );
};

// SocialButton.propTypes = {
//   text: PropTypes.string.isRequired,
//   icon: PropTypes.object.isRequired, // Assuming icon is an object from FontAwesomeIcon
//   url: PropTypes.string.isRequired,
// };

export default SocialButton;
