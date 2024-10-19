"use client";
import ChartWidget from "../ChartWidget/page";
import { useState } from "react";

const portfolio = [
  {
    symbol: "HDFCBANK",
    exchange: "BSE",
  },
  {
    symbol: "ASIANPAINT",
    exchange: "BSE",
  },
  {
    symbol: "IDFCFIRSTB",
    exchange: "BSE",
  },
  {
    symbol: "EQUITASBNK",
    exchange: "BSE",
  },
  {
    symbol: "UJJIVANSFB",
    exchange: "BSE",
  },
  {
    symbol: "BANDHANBNK",
    exchange: "BSE",
  },
  {
    symbol: "DREAMFOLKS",
    exchange: "BSE",
  },
  {
    symbol: "AXISBANK",
    exchange: "BSE",
  },
  {
    symbol: "CUB",
    exchange: "BSE",
  },
  {
    symbol: "ARMAANFIN",
    exchange: "BSE",
  },
  {
    symbol: "AAVAS",
    exchange: "BSE",
  },
  {
    symbol: "LIQUIDBEES",
    exchange: "BSE",
  },
  {
    symbol: "5PAISA",
    exchange: "BSE",
  },
  {
    symbol: "FINEORG",
    exchange: "BSE",
  },{
    symbol: "GREENPANEL",
    exchange: "BSE",
  },{
    symbol: "SBICARD",
    exchange: "BSE",
  },{
    symbol: "MAXHEALTH",
    exchange: "BSE",
  },{
    symbol: "TCS",
    exchange: "BSE",
  },
  {
    symbol: "KOTAKBANK",
    exchange: "BSE",
  },{
    symbol: "ICICIBANK",
    exchange: "BSE",
  },{
    symbol: "INDIGOPNTS",
    exchange: "BSE",
  },{
    symbol: "HITECH",
    exchange: "BSE",
  },{
    symbol: "HINDUNILVR",
    exchange: "BSE",
  },
  {
    symbol: "PVRINOX",
    exchange: "BSE",
  },{
    symbol: "GOLDBEES",
    exchange: "BSE",
  },{
    symbol: "HDFCLIFE",
    exchange: "BSE",
  },{
    symbol: "NUVAMA",
    exchange: "BSE",
  },
];

const PortfolioTool = () => {
  const [stock, setStock] = useState(portfolio[1]);

  return (
    <div className="flex flex-col w-full min-h-[700px] gap-[32px] py-[32px] overflow-y-scroll">
      
      <div className="w-full flex gap-2 flex-wrap">
        {portfolio.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <button
                onClick={() => setStock(item)}
                className={item.symbol === stock.symbol ? "bg-white border border-[#DBDBDA] text-black px-4 py-2 rounded-lg" : "bg-primary text-white px-4 py-2 rounded-lg"}
              >
                {item.symbol}
              </button>
            </div>
          );
        })}
      </div>
      <div className="h-full">
        <ChartWidget symbol={stock.symbol} exchange={stock.exchange} />
      </div>
    </div>
  );
};

export default PortfolioTool;
