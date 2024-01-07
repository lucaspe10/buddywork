import React from "react";
import Rectangle from "../components/rectangle";
import RectangleHigh from "../components/rectanglehigh";
import RectangleBig from "@/components/rectanglebig";
import UserImage from "../components/user_image";
import NavBar from "../components/navbar";

const HomePage = () => {
  return (
    <div className="h-screen bg-custom-background w-full p-5">
      <div className="flex flex-col w-full mx-auto ">
      <UserImage />
        <div className="items-center mb-8">
          <h1 className="text-base ml-16 -mt-12">Buongiorno,</h1>
          <p className="text-base  ml-16 italic">Marco</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 -mt-8 ">
          <div className="col-span-2 w-80 ">
            <RectangleBig
              image="/Ellipse 9.png"
              title="Motivazione"
              testo1="Spinta interiore che porta ad impegnarsi con serietà e diligenza nella propria attività"
              testo2="82.6%"
              path="motivazione"
            />
          </div>
          <div className="row-span-2 w-auto h-auto p-5" >
            <RectangleHigh
              image="/Ellipse 9.png"
              title="Engangement"
              testo1="Stato mentale positivo e di soddisfazione nei confronti del proprio lavoro"
              testo2="74%"
              path="engangement"

            />
          </div>
          <Rectangle 
              image="/stress.png" 
              title="Stress" 
              testo1="76%"
              path="stress" />
          <Rectangle 
              image="/burnout.png" 
              title="Burnout" 
              testo2="45%"
              path="burnout" />
          <Rectangle 
              image="/personalità.png" 
              title="Personalità" 
              path="personalita" />
          <Rectangle 
              image="/soddisfazione.png" 
              title="Soddisfazione" 
              path="soddisfazione" />
              
          <NavBar 
              image="/home.png"
              image2="/chatbot.png" 
              image3="/profilo.png" 
              image4="/impostazioni.png"
              />
          </div>
        </div>
      </div>
  );
};

export default HomePage;
