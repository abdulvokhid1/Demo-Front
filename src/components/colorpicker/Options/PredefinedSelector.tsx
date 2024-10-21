import React from "react";
import { Color } from "@/components/colorpicker/Interfaces/Color";
import "./PredefinedSelector.css";

const predefinedRows = 3;

interface PredefinedSelectorProps {
  parsedColor: Color;
  colors: Array<string>;
  id: number;
  channel: number;
  onSelect(color: string, id: number, channel: number): void;
}

export const PredefinedSelector = (props: PredefinedSelectorProps) => {
  const { parsedColor, colors, onSelect,id, channel } = props;
    const [newColor, setNewColor] = React.useState<string>(parsedColor.hex);
  const onClickHandle = (color: string) => {
      setNewColor(color)
      console.log(color);
      onSelect(color, id, channel)
  }
  return (
    <div
      className="cp-predefined-root"
      style={{
        height: 2 + 35 * predefinedRows + "px",
        width: 16 + 35 * Math.ceil(colors.length / predefinedRows) + "px"
      }}
    >
      {colors.map((color) => (
        <button
          className="cp-color-button"
          key={color}
          onClick={(event) => {
              onClickHandle(color)
          }}
          style={{
            // border: color === parsedColor?.hex ? "1px solid #000000" : "none"
              border: color === newColor ? "1px solid #000000" : "none"

          }}
        >
          <div
            className="cp-preview-color"
            style={{
              background: color
            }}
          />
        </button>
      ))}
    </div>
  );
};
