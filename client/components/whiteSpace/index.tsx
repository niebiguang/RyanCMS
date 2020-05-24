import React from 'react';

export function WhiteSpace({ space = 1 }: { space?: number; }) {
  return <>{new Array(space).fill(' ').toString()}</>;
}