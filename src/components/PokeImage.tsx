import React from 'react';

interface PokeImageProps {
  index: number;
  alt: string;
  className?: string;
}

const PokeImage = (props: PokeImageProps) => {
  const { index, alt, className } = props;
  return <img src={`/sprites/${index}.png`} alt={alt} className={className} />;
};

export default PokeImage;
