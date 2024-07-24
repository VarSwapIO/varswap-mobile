import React, { ReactNode } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { TouchableArea } from "components/buttons/TouchableArea";
import { Flex } from "components/layout";
import { BottomSheetDetachedModal } from "components/modals/BottomSheetModal";
import { Text } from "components/Text";
import { ModalName } from "features/telemetry/constants";
import { dimensions } from "styles/sizing";
import { flex } from "styles/flex";

export interface MenuItemProp {
  key: string;
  onPress: () => void;
  render: () => ReactNode;
}

interface ActionSheetModalContentProps {
  closeButtonLabel?: string;
  onClose: () => void;
  options: MenuItemProp[];
  header?: ReactNode | string;
}

export function ActionSheetModalContent(
  props: ActionSheetModalContentProps
): JSX.Element {
  const { header, closeButtonLabel = "Cancel", options, onClose } = props;

  return (
    <Flex gap="spacing12" justifyContent="flex-end">
      <Flex
        centered
        bg="background"
        borderRadius="rounded16"
        gap="none"
        overflow="hidden"
      >
        {typeof header === "string" ? (
          <Flex centered gap="spacing4" py="spacing16">
            <Text variant="mediumMedium">{header}</Text>
          </Flex>
        ) : (
          header
        )}

        <Flex gap="none" maxHeight={dimensions.fullHeight * 0.5} width="100%">
          <ScrollView bounces={false} style={flex.grow}>
            {options.map(({ key, onPress, render }) => {
              return (
                <TouchableArea
                  key={key}
                  hapticFeedback
                  testID={key}
                  onPress={onPress}
                >
                  {render()}
                </TouchableArea>
              );
            })}
          </ScrollView>
        </Flex>
      </Flex>
      <Flex bg="background" borderRadius="rounded12">
        <TouchableArea hapticFeedback onPress={onClose}>
          <Flex
            centered
            bg="background"
            borderRadius="rounded12"
            py="spacing16"
          >
            <Text color="textPrimary" variant="mediumMedium">
              {closeButtonLabel}
            </Text>
          </Flex>
        </TouchableArea>
      </Flex>
    </Flex>
  );
}

interface ActionSheetModalProps extends ActionSheetModalContentProps {
  isVisible: boolean;
  name: ModalName;
}

export function ActionSheetModal({
  isVisible,
  onClose,
  name,
  ...rest
}: ActionSheetModalProps): JSX.Element | null {
  if (!isVisible) return null;

  return (
    <BottomSheetDetachedModal
      hideHandlebar
      backgroundColor="transparent"
      name={name}
      onClose={onClose}
    >
      <ActionSheetModalContent onClose={onClose} {...rest} />
    </BottomSheetDetachedModal>
  );
}
