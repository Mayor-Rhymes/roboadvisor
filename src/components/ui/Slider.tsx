import * as Slider from "@radix-ui/react-slider";
import { Dispatch, SetStateAction, useState } from "react";




interface SliderProps {
    slideValue: number[],
    setSlideValue: Dispatch<SetStateAction<number[]>>,
    handleSlideSelection: (value: number) => void;
}
const SliderComp = ({slideValue, setSlideValue, handleSlideSelection}: SliderProps) => {
  
  
  return (
    <form>
      <Slider.Root
        className="relative p-3 flex items-center select-none touch-none w-80 lg:w-[400px] h-5"
        defaultValue={slideValue}
        onValueChange={(number: number[]) => {
          setSlideValue(number);
          console.log(slideValue);
          handleSlideSelection(slideValue[0]);
        }}
        max={10}
        min={0}
        step={1}
      >
        <Slider.Track className="bg-cool-touch relative grow rounded-full h-[10px]">
          <Slider.Range className="absolute bg-slate-200 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-7 rounded-full h-7 bg-white shadow-[0_2px_10px] focus:outline-none"
          aria-label="Volume"
        />
      </Slider.Root>
    </form>
  );
};

export default SliderComp;
