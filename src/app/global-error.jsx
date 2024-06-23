"use client";

import React, { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import PropTypes from "prop-types";

const Error = ({ error, reset }) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div
          className={`relative flex flex-col justify-center items-center w-screen max-w-full min-h-screen p-4 m-0 overflow-hidden transition duration-300 ease-in-out`}
        >
          <p className="text-3xl/6 text-[var(--errorColor)]">
            Something went wrong...!!!
          </p>

          <div className="border border-[var(--errorColor)] rounded-[var(--borderRadius)] mt-4 p-4">
            <p className="text-base/6 text-[var(--errorColor)]">
              {error.message}
            </p>
          </div>

          <button
            className="app__text_btn"
            style={{
              margin: "1rem auto 0",
            }}
            onClick={() => reset()}
          >
            Refresh
          </button>
        </div>

        <NextError statusCode={0} />
      </body>
    </html>
  );
};

Error.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    digest: PropTypes.string,
  }).isRequired,
  reset: PropTypes.func.isRequired,
};

export default Error;
