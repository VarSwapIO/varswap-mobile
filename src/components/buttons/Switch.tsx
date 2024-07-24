import { SpacingProps, SpacingShorthandProps } from "@shopify/restyle";
import React from "react";
import { Switch as BaseSwitch, SwitchProps, ViewProps } from "react-native";

import { useAppTheme } from "app/hooks";
import { Box } from "components/layout/Box";
import { Theme } from "styles/theme";
import { colors } from "styles/color";

type RestyleProps = SpacingProps<Theme> & SpacingShorthandProps<Theme>;

type Props = {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  disabled?: boolean;
} & RestyleProps &
  ViewProps &
  SwitchProps;

// A themed switch toggle
export function Switch({
  value,
  onValueChange,
  disabled,
  ...rest
}: Props): JSX.Element {
  const theme = useAppTheme();

  return (
    <Box>
      <BaseSwitch
        ios_backgroundColor={colors.greyscale200}
        thumbColor={theme.colors.white}
        trackColor={{
          false: theme.colors.white,
          true: theme.colors.primary,
        }}
        value={value}
        onValueChange={disabled ? undefined : onValueChange}
        {...rest}
      />
    </Box>
  );
}
