import { useTheme } from "@shopify/restyle";
import React from "react";
import { Chevron } from "components/icons/Chevron";
import { Flex } from "components/layout";
import { Text } from "components/Text";
import { Theme } from "styles/theme";

type Props = {
  size?: number;
  color?: keyof Theme["colors"];
  showButtonLabel?: boolean;
};

export function BackButtonView({
  size,
  color,
  showButtonLabel,
}: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Flex row alignItems="center" gap="spacing8">
      <Chevron
        color={color ? theme.colors[color] : theme.colors.secondary}
        height={size}
        width={size}
      />
      {showButtonLabel && (
        <Text color="secondary" variant="medium">
          {"Back"}
        </Text>
      )}
    </Flex>
  );
}
