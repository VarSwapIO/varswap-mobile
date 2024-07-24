import { SpacingProps, SpacingShorthandProps } from "@shopify/restyle";
import React from "react";
import { useAppTheme } from "app/hooks";
import { TouchableArea } from "components/buttons/TouchableArea";
import { Theme } from "styles/theme";
import XIcon from "assets/icons/close.svg";

type Props = {
  onPress: () => void;
  size?: number;
  strokeWidth?: number;
  color?: keyof Theme["colors"];
} & SpacingProps<Theme> &
  SpacingShorthandProps<Theme>;

export function CloseButton({
  onPress,
  size,
  strokeWidth,
  color,
  ...rest
}: Props): JSX.Element {
  const theme = useAppTheme();
  return (
    <TouchableArea onPress={onPress} {...rest}>
      <XIcon
        color={theme.colors[color ?? "white"]}
        height={size ?? 20}
        strokeWidth={strokeWidth ?? 2}
        width={size ?? 20}
      />
    </TouchableArea>
  );
}
