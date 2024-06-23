import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const GalleryImageView = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt || `img`}
      width={1080}
      height={1080}
      sizes="100%"
      priority={false}
      loading="lazy"
      placeholder="blur"
      blurDataURL="/images/placeholder.png"
      className="w-full h-auto max-h-[calc(100vh-8rem)] object-contain m-auto"
    />
  );
};

GalleryImageView.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

GalleryImageView.defaultProps = {
  alt: "img",
};

export default GalleryImageView;
