import { useEffect, useState } from "react";
import { GetColorName } from "hex-color-to-color-name";

export const SideBar = (props) => {
  useEffect(() => {
    // setColorList([...colorList, "#062693"]);
  }, []);

  const generateColor = () => {
    let hexString = Math.floor(Math.random() * 16777215).toString(16);
    let colorName = GetColorName(hexString);
    hexString = `#` + hexString;
    props.genColor(hexString, colorName);
    props.selectColor(hexString, colorName)
    props.getColors();
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#D6D8D8",
        flex: 1,
        flexDirection: "column",
        overflow:'scroll',
        height:'92vh'
      }}
    >
      <button onClick={() => generateColor()}>Test</button>
      {props.colors.map((color) => {
        return (
          <div
          style={{display:'flex', 
          marginLeft:20}}>
            <h1
              style={{fontFamily: 'Roboto Condensed'}}
              key={color.ColorId}
              onClick={() => props.selectColor(color.HexString)}
            >
              {color.ColorName}
            </h1>
          </div>
        );
      })}
    </div>
  );
};
