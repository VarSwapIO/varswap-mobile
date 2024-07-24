import React from "react";
import { Box } from "../layout";
import { Text } from "../Text";
import { CenterBox } from "../layout/CenterBox";
import { theme } from "styles/theme";

const TickDisplay = (props: {
  tick?: string;
  amt?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  lineHeight?: number;
}) => {
  const {
    tick = "strs",
    amt = "0",
    width,
    height,
    fontSize,
    lineHeight = 24,
  } = props;
  return (
    <CenterBox
      style={{ backgroundColor: "#d1d5da" }}
      width={width}
      height={height}
      justifyContent={"center"}
    >
      <Text
        variant={"small"}
        lineHeight={lineHeight}
        fontSize={fontSize}
        style={{
          color: "#000",
        }}
        fontWeight={"500"}
      >{`{
 "p": "strk-20",
 "op": "mint",
 "tick": "${tick}",
 "amt": "${amt}",
}`}</Text>
    </CenterBox>
  );
};

export default TickDisplay;
