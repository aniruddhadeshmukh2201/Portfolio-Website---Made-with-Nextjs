// ChartWidget.jsx
'use client'
import React, { useEffect, useRef, memo } from 'react';

function ChartWidget({ symbol, exchange } : any) {
  const container = useRef();

  useEffect(() => {
    // Clear the container before appending a new widget
    
    if (container.current) {
      (container.current as HTMLElement).innerHTML = ''; // Remove existing content
    }
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          [
            "${exchange}:${symbol}",
            "${symbol}|12m"
          ]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "colorTheme": "light",
        "autosize": true,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "headerFontSize": "medium",
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }`;
    //@ts-ignore
    container.current.appendChild(script);
  }, [symbol, exchange]);  // Depend on symbol and exchange

  return (
    // @ts-ignore
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        
      </div>
    </div>
  );
}

export default memo(ChartWidget);
