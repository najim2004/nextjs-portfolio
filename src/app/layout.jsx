import React from "react";
import PropTypes from "prop-types";
import "./globals.css";
import { Poppins } from "next/font/google";
import { WebVitals } from "@/components/common/WebVitals";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata = {
  title: "Najim",
  description:
    "Najim is a proficient Jr Full Stack Developer from India, skilled in front-end and back-end development using modern tech stacks.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      sizes: "any",
      type: "image/svg+xml",
    },
  ],
  keywords: [
    "Najm",
    "Mohammad Najim",
    "mohammadnajim",
    "mohamad-najim",
    "najim mohammad",
    "full stack developer",
    "bangladeshi developer",
    "najim github",
  ],
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
      <head></head>

      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
