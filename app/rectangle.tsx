import React from 'react';
import Link from 'next/link';

interface RectangleProps {
  href: string;
  textTop: string;
  textBottom?: string;
  customClassName?: string;
  imageSrc?: string;
  width?: string;
  height?: string;
  rightText?: string;
  className?: string;
}

const Rectangle: React.FC<RectangleProps> = ({ href, textTop, textBottom, customClassName, imageSrc, width, height }) => {
  const rectangleStyles = {
    border: '2px solid black',
    margin: '2px',
    cursor: 'pointer',
    backgroundColor: '#8B8B8B',
    width: width || '100px', 
    height: height || '100px', 
  };

  return (
    <Link href={href}>
      <div style={rectangleStyles}>
        {imageSrc && <img src={imageSrc} alt="Immagine" style={{ width: '100%', height: '75%', objectFit: 'cover' }} />}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{textTop}</p>
          <p style={{ fontSize: '1em', fontStyle: 'italic' }}>{textBottom}</p>
        </div>
      </div>
    </Link>
  );
};


interface CircleProps {
  href: string;
  imageSrc: string;
  textTop: string;
  textBottom: string;
  customClassName?: string;
}

const Circle: React.FC<CircleProps> = ({ href, imageSrc, textTop, textBottom, customClassName }) => {
  return (
    <Link href={href}>
      <div className={`w-32 h-32 bg-gray-300 border-4 border-gray-400 rounded-full flex items-center justify-center overflow-hidden ${customClassName}`}>
        <img src="@assets/marco.jpg" alt="Immagine" className="w-full h-full object-cover rounded-full" />
      </div>
    </Link>
  );
};

export { Rectangle, Circle };
