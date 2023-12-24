import React from "react";
import Rectangle from "../components/rectangle";
import RectangleHigh from "../components/rectanglehigh";
import RectangleBig from "@/components/rectanglebig";
import UserImage from "../components/user_image";
import NavBar from "../components/navbar";

const HomePage = () => {
  return (
    <div className="h-screen bg-custom-background w-full p-5">
      <div className="flex flex-col w-full mx-auto">
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-3xl font-bold mr-6">Buddywork</h1>
          <UserImage />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-10.5 ">
          <div className="col-span-2 w-80 ">
            <RectangleBig
              image="/Ellipse 9.png"
              title="Motivazione"
              testo1="Spinta interiore che porta ad impegnarsi con serietà e diligenza nella propria attività"
              testo2="82.6%"
              path="motivazione"
            />
          </div>
          <div className="row-span-2 w-auto h-auto p-4" >
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
              path="stress" />
          <Rectangle 
              image="/burnout.png" 
              title="Burnout" 
              path="burnout" />
          <Rectangle 
              image="/personalità.png" 
              title="Personalità" 
              path="personalità" />
          <Rectangle 
              image="/soddisfazione.png" 
              title="Soddisfazione" 
              path="soddisfazione" />
              
          <div className="col-span-2 w-4/4 h-6">
          <NavBar 
              image="/home.png" 
              image2="/chatbot.png" 
              image3="/profilo.png" 
              image4="/impostazioni.png"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
