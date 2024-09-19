import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-1 max-sm:flex-col-reverse w-screen min-h-full ">
      <Outlet />

      <div className="right w-1/2 max-sm:w-screen min-h-[full] max-sm:min-h-[40vh] flex flex-col items-center justify-center">
        <Canvas className="max-sm:aspect-square" camera={{ position : [0, 1, 1], fov: 21 }}>
          <Model />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
