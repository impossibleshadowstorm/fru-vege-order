import React from "react";
import { imageLoader } from "../../utils/helpers"; 

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