"use client";

import { useReportWebVitals } from "next/web-vitals";
import PropTypes from "prop-types";

export function WebVitals({ onReport }) {
  useReportWebVitals((metric) => {
    console.log(metric);
    if (onReport) {
      onReport(metric);
    }
  });

  return null;
}

WebVitals.propTypes = {
  onReport: PropTypes.func,
};
