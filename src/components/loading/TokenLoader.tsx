import React from "react";
import { Box, Flex } from "components/layout";
import { Text } from "components/Text";
// import { TOKEN_BALANCE_ITEM_HEIGHT } from "components/tokenBalanceList/TokenBalanceItem";
import { iconSizes } from "styles/sizing";

interface TokenLoaderProps {
  opacity: number;
}

export function TokenLoader({ opacity }: TokenLoaderProps): JSX.Element {
  return (
    <Flex
      alignItems="flex-start"
      flexDirection="row"
      justifyContent="space-between"
      // minHeight={TOKEN_BALANCE_ITEM_HEIGHT}
      opacity={opacity}
      py="spacing8"
    >
      <Flex
        row
        alignItems="center"
        flexShrink={1}
        gap="spacing12"
        overflow="hidden"
      >
        <Box
          bg="background"
          borderRadius="roundedFull"
          minHeight={iconSizes.icon40}
          minWidth={iconSizes.icon40}
        />
        <Flex alignItems="flex-start" flexShrink={1} gap="none">
          <Text
            loading="no-shimmer"
            loadingPlaceholderText="Token Full Name"
            numberOfLines={1}
            variant="mediumMedium"
          />
          <Flex row alignItems="center" gap="spacing8" minHeight={20}>
            <Text
              loading="no-shimmer"
              loadingPlaceholderText="1,000 TFN"
              numberOfLines={1}
              variant="mediumMedium"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
