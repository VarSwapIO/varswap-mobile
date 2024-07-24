import React from "react";
import { Box, Flex } from "components/layout";
import { Text } from "components/Text";
// import {ADDRESS_WRAPPER_HEIGHT} from 'features/import/WalletPreviewCard';

interface Props {
  opacity: number;
}

export function WalletLoader({ opacity }: Props): JSX.Element {
  return (
    <Flex
      row
      alignItems="center"
      borderColor="background"
      borderRadius="rounded16"
      borderWidth={1}
      justifyContent="flex-start"
      opacity={opacity}
      overflow="hidden"
      px="spacing16"
      py="spacing12"
    >
      <Flex
        row
        alignItems="center"
        gap="spacing12"
        // height={ADDRESS_WRAPPER_HEIGHT}
      >
        <Box
          bg="background3"
          borderRadius="roundedFull"
          height={32}
          width={32}
        />
        <Flex alignItems="flex-start" gap="none" width="100%">
          <Text
            loading
            loadingPlaceholderText="Wallet Nickname"
            // variant="bodyLarge"
          />
          <Text
            loading
            loadingPlaceholderText="0xaaaa...aaaa"
            // variant="subheadSmall"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
