import React from "react";
import "./slider.css";
import { slide } from "../../assets/data/data";

export const Slider = () => {
  return (
    <>
      <div className="slider ">
        <div className="max-w-[95px] m-auto grid gap-5 md:grid-cols-4 grid-cols-2">
          {slide.map((item, i) => (
            <div className="box" key={i}>
              <div className="img">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
