import React from "react";
import { toggleChoice } from "../redux/choice/choiceSlice";
import { useDispatch } from "react-redux";

const Details = () => {
    const dispatch = useDispatch();
    
  return (
    <div className="left w-1/2 max-sm:w-screen min-h-full max-sm:h-[50vh] flex flex-col items-center justify-center max-sm:justify-start max-sm:pt-8 gap-6">
      <h1 className="text-2xl text-center">
        The <span className="animate-pulse text-neon-green">Notes Sharing</span>{" "}
        App.
      </h1>
      <button className="button" onClick={() => dispatch(toggleChoice())}>
        <span className="button_top text-xs">Change Animation</span>
      </button>
    </div>
  );
};

export default Details;
