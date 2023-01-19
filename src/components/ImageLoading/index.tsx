import React, { useState } from 'react';
import Loading from '../Loading';

import { Wrapper, Image } from './styled';

interface IProps {
  src: string;
  alt: string;
  size?: string;
}

const ImageLoading = ({ src, alt, size = '100%' }: IProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Wrapper>
      <Image
        src={src}
        alt={alt}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
      {isLoading && <Loading size={size} />}
    </Wrapper>
  );
};

export default ImageLoading;
