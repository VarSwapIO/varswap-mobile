import {
  BackgroundColorProps,
  SpacingProps,
  SpacingShorthandProps,
} from "@shopify/restyle";
import React, { PropsWithChildren } from "react";
import { BackButton } from "components/buttons/BackButton";
import { Box, Flex } from "components/layout";
import { Theme } from "styles/theme";

const BACK_BUTTON_SIZE = 24;

type BackButtonRowProps = {
  alignment?: "left" | "center";
  endAdornment?: JSX.Element;
  showBackButton?: boolean;
} & SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BackgroundColorProps<Theme>;

export function BackHeader({
  alignment = "center",
  children,
  showBackButton = true,
  endAdornment = <Box width={BACK_BUTTON_SIZE} />,
  ...spacingProps
}: PropsWithChildren<BackButtonRowProps>): JSX.Element {
  return (
    <Flex
      row
      alignItems="center"
      justifyContent={alignment === "left" ? "flex-start" : "space-between"}
      zIndex={"popover"}
      {...spacingProps}
    >
      {showBackButton ? (
        <BackButton size={BACK_BUTTON_SIZE} />
      ) : (
        <Box width={BACK_BUTTON_SIZE} />
      )}
      {children}
      {endAdornment}
    </Flex>
  );
}
