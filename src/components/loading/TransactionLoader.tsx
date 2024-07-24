import React from "react";
import { Flex } from "components/layout";
import { Text } from "components/Text";
// import {TXN_HISTORY_ICON_SIZE} from 'features/transactions/SummaryCards/TransactionSummaryLayout';

interface TransactionLoaderProps {
  opacity: number;
}

export function TransactionLoader({
  opacity,
}: TransactionLoaderProps): JSX.Element {
  return (
    <Flex opacity={opacity} overflow="hidden">
      <Flex
        grow
        row
        alignItems="flex-start"
        gap="spacing16"
        justifyContent="space-between"
        py="spacing12"
      >
        <Flex
          row
          shrink
          alignItems="center"
          gap="spacing12"
          height="100%"
          justifyContent="flex-start"
        >
          <Flex
            centered
            bg="background"
            borderRadius="roundedFull"
            // height={TXN_HISTORY_ICON_SIZE}
            // width={TXN_HISTORY_ICON_SIZE}
          />
          <Flex shrink gap="none">
            <Flex row alignItems="center" gap="spacing4">
              <Text
                loading
                loadingPlaceholderText="Contract Interaction"
                numberOfLines={1}
                // variant="bodyLarge"
              />
            </Flex>
            <Text
              loading
              color="textSecondary"
              loadingPlaceholderText="Caption Text"
              numberOfLines={1}
              // variant="subheadSmall"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
