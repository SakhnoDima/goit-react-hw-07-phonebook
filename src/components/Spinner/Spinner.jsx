import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <RotatingLines
      strokeColor="red"
      strokeWidth="5"
      animationDuration="0.75"
      width="16"
      visible={true}
    />
  );
};
