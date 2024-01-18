import { useState } from "react";
import SliderComp from "../components/ui/Slider";
import "rc-slider/assets/index.css";
import { stockData, stockDataType } from "../libs/fakeData";


export default function RiskTolerance() {
  const [slideValue, setSlideValue] = useState<number[]>([0]);
  const [currentStock, setCurrentStock] = useState<stockDataType | null>(
    stockData[0]
  );
  const handleSlideSelection = (value: number) => {
    const stock = stockData.find((stock) => stock["Tolerance"] === value);
    if (stock) {
      setCurrentStock(stock);
    }
  };

  console.log(currentStock);
  return (
    <div className="flex pl-10 py-10 flex-col mt-10 gap-10 min-h-screen">
      <p className="text-xl font-bold">Please check your risk tolerance</p>
      <p>Tolerance or Risk Score: <span className="text-lg font-semibold text-purple-800">{slideValue[0]}</span></p>
      <SliderComp
        slideValue={slideValue}
        setSlideValue={setSlideValue}
        handleSlideSelection={handleSlideSelection}
      />

      {/* chart */}

      <div className="flex flex-col gap-2">
        {currentStock &&
          Object.keys(currentStock).map((stock: string) => {
            if (
              stock !== "Tolerance" &&
              currentStock[stock as keyof stockDataType] !== 0
            ) {
              return (
                <div className="flex gap-10 items-center">
                  <div
                    className={`h-10 bg-black rounded-md`}
                    style={{
                      width: `${currentStock[stock as keyof stockDataType]}%`,
                    }}
                  ></div>
                  <p key={stock}>
                    {stock}: {currentStock[stock as keyof stockDataType]}%
                  </p>
                </div>
              );
            } else if (currentStock[stock as keyof stockDataType] === 0 && stock !== "Tolerance") {
              return (
                <p key={stock}>
                  {stock}: {currentStock[stock as keyof stockDataType]}%
                </p>
              );
            }
          })}
      </div>
    </div>
  );
}
