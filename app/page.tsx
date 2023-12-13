import React from 'react';
import { Rectangle, Circle } from '../app/rectangle';

const HomePage = () => {
  return (
    <div className="h-screen bg-custom-background">
      <div className="flex flex-wrap justify-center">
        <Circle
          href="/profilo"
          imageSrc="/assets/marco.jpg"
          textTop="Testo sopra 2"
          textBottom="Testo sotto 2"
          customClassName="my-custom-circle" 
        />
        <Rectangle
          href="/motivazione"
          textTop="Motivazione"
          textBottom="Spinta interiore che porta ad impegnarsi con serietà e diligenza nella propria attività"
          width="300px"
          height="150px"
          className="md:w-full md:h-48 md:order-first md:m-2"
        />
        <Rectangle
          href="/engangement"
          imageSrc="/images/image2.jpg"
          textTop="Engangement"
          textBottom="Stato mentale positivo e di soddisfazione nei confronti del proprio lavoro"
          width="100px"
          height="300px"
          className="w-48 h-32 m-2 md:w-full md:h-48 md:order-last md:mb-2 text-base"
        />
        <Rectangle
          href="/stress"
          imageSrc="/images/image2.jpg"
          textTop="76%"
          textBottom="Stress"
          className="w-48 h-32 m-2"
        />
        <Rectangle
          href="/burnout"
          imageSrc="/images/image2.jpg"
          textTop="45%"
          textBottom="Burnout"
          className="w-48 h-32 m-2"
        />
        <Rectangle
          href="/soddisfazione"
          imageSrc="/images/image2.jpg"
          textTop="65%"
          width="100px"
          height="300px"
          textBottom="Soddisfazione"
          className="w-48 h-32 m-2 lg:w-48 lg:h-32"
        />
        <Rectangle
          href="/personalità"
          imageSrc="/images/image2.jpg"
          textTop="personalità"
          className="w-48 h-32 m-2"
        />
      </div>
    </div>
  );
};

export default HomePage;
