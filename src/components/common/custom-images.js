import React from "react";
import { imageLoader } from "../../utils/helpers"; // Adjust the import path based on your project structure

const CustomImage = ({ src, alt, className }) => {
  const imageUrl = imageLoader({ src });

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
    />
  );
};

export default CustomImage;