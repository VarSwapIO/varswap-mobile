import React from "react";
import { ColorValue, FlexStyle } from "react-native";
import { useAppTheme } from "app/hooks";
import { Box, Flex } from "components/layout";
import { theme as FixedTheme } from "styles/theme";

const HANDLEBAR_HEIGHT = FixedTheme.spacing.spacing4;
const HANDLEBAR_WIDTH = FixedTheme.spacing.spacing36;

export const HandleBar = ({
  backgroundColor,
  hidden = false,
  containerFlexStyles,
}: {
  // string instead of keyof Theme['colors] because this is sometimes a raw hex value when used with BottomSheet components
  backgroundColor: ColorValue;
  hidden?: boolean;
  containerFlexStyles?: FlexStyle;
}): JSX.Element => {
  const theme = useAppTheme();
  const bg = hidden
    ? "transparent"
    : backgroundColor ?? theme.colors.background;

  return (
    <Flex
      alignItems="center"
      borderRadius="rounded24"
      justifyContent="center"
      style={{
        ...containerFlexStyles,
        backgroundColor: bg,
      }}
    >
      <Box
        alignSelf="center"
        backgroundColor={hidden ? "none" : "background3"}
        borderRadius="rounded24"
        height={HANDLEBAR_HEIGHT}
        overflow="hidden"
        width={HANDLEBAR_WIDTH}
      />
    </Flex>
  );
};
