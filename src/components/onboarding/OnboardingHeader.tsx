import React from "react";

import { Box, Flex } from "components/layout";
import { CenterBox } from "../layout/CenterBox";
import { useIsDarkMode } from "features/appearance/hooks";

export default function OnboardingHeader({ step = 1 }: { step: number }) {
  const isDarkMode = useIsDarkMode();
  return (
    <Flex flexDirection={"row"} gap="none" alignItems={"center"}>
      <CenterBox
        height={22}
        width={22}
        borderRadius={"rounded12"}
        borderWidth={2}
        backgroundColor={
          step >= 1 ? "primary" : isDarkMode ? "dark3" : "greyscale300"
        }
      ></CenterBox>
      <Box
        height={2}
        width={50}
        backgroundColor={isDarkMode ? "dark3" : "greyscale300"}
      >
        <Box height={2} width={step > 1 ? 50 : 0} backgroundColor={"primary"} />
      </Box>
      <CenterBox
        height={22}
        width={22}
        borderRadius={"rounded12"}
        borderWidth={2}
        backgroundColor={
          step >= 2 ? "primary" : isDarkMode ? "dark3" : "greyscale300"
        }
      ></CenterBox>
      <Box
        height={2}
        width={50}
        backgroundColor={isDarkMode ? "dark3" : "greyscale300"}
      >
        <Box height={2} width={step > 2 ? 50 : 0} backgroundColor={"primary"} />
      </Box>
      <CenterBox
        height={22}
        width={22}
        borderRadius={"rounded12"}
        borderWidth={2}
        backgroundColor={
          step >= 3 ? "primary" : isDarkMode ? "dark3" : "greyscale300"
        }
      ></CenterBox>
    </Flex>
  );
}
