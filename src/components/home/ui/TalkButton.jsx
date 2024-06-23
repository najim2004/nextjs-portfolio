import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Strings from "@/constants/strings";

const TalkButton = () => {
  return (
    <Link
      href={Strings.telegramLink || "#"}
      target="_blank"
      className="app__filled_btn min-w-[12rem]"
    >
      Let's Talk
    </Link>
  );
};

TalkButton.propTypes = {
  Strings: PropTypes.shape({
    telegramLink: PropTypes.string.isRequired,
  }),
};

export default TalkButton;
