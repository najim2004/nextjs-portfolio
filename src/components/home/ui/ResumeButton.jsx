import React from "react";
import PropTypes from "prop-types";
// import LocalConfig from "@/constants/config";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      href={
        "https://drive.google.com/file/d/1WcKP13btUY4Qwy3GsHZjLZxnJ4lKAd1h/view?usp=sharing"
      }
      target="_blank"
      className="app__outlined_btn min-w-[12rem]"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
