import React from 'react';

export interface TitleProps {
    text : string,
    className ?: string
}

export default function Title ({text, className}: TitleProps) {
  return (
    <h1 className={'text-lg font-bold ml-4 md:ml-8 mb-2 ' + className}>
            {text}
    </h1>
  );
}
