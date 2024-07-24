import { ShadowProps } from "@shopify/restyle";
import React, { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { useAppTheme } from "app/hooks";
import AlertTriangle from "assets/icons/alert-triangle.svg";
import { TouchableArea } from "components/buttons/TouchableArea";
import { Chevron } from "components/icons/Chevron";
import { Box, BoxProps, Flex } from "components/layout";
import { Trace } from "components/telemetry/Trace";
import { Text } from "components/Text";
import { useIsDarkMode } from "features/appearance/hooks";
import { Theme } from "styles/theme";
import { opacify } from "utils/colors";

const SHADOW_OFFSET: ShadowProps<Theme>["shadowOffset"] = {
  width: 4,
  height: 8,
};
export const SHADOW_OFFSET_SMALL: ShadowProps<Theme>["shadowOffset"] = {
  width: 0,
  height: 2,
};

// Container
export function Container({
  children,
  ...trace
}: PropsWithChildren<ComponentProps<typeof Trace>>): JSX.Element {
  return (
    <Trace {...trace}>
      <Box
        bg="background"
        borderColor="outline"
        borderRadius="rounded16"
        borderWidth={0.25}
        overflow="visible"
        shadowColor="black"
        shadowOffset={SHADOW_OFFSET}
        shadowOpacity={0.05}
        shadowRadius={10}
      >
        {children}
      </Box>
    </Trace>
  );
}

export function Shadow({ children, ...rest }: BoxProps): JSX.Element {
  const isDarkMode = useIsDarkMode();
  const theme = useAppTheme();
  return (
    <Box
      // bg={rest?.bg ?? isDarkMode ? 'backgroundOutline' : 'background1'}
      borderRadius="rounded16"
      p="spacing12"
      shadowColor={isDarkMode ? "black" : "none"}
      shadowOffset={SHADOW_OFFSET_SMALL}
      shadowOpacity={0.4}
      shadowRadius={6}
      style={{
        backgroundColor: opacify(isDarkMode ? 10 : 100, theme.colors.white),
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

// Header
type HeaderProps = {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  onPress?: () => void;
  icon?: JSX.Element;
} & ComponentProps<typeof TouchableArea>;

function Header({
  title,
  subtitle,
  onPress,
  icon,
  ...buttonProps
}: HeaderProps): JSX.Element {
  const theme = useAppTheme();

  return (
    <TouchableArea
      borderBottomColor="outline"
      borderBottomWidth={0.25}
      px="spacing16"
      py="spacing12"
      onPress={onPress}
      {...buttonProps}
    >
      <Flex row alignItems="center" justifyContent="space-between">
        <Flex gap="spacing4">
          <Flex row alignItems="center" gap="spacing8">
            {icon}
            {typeof title === "string" ? (
              <Text color="textSecondary" variant="small">
                {title}
              </Text>
            ) : (
              title
            )}
          </Flex>
          {subtitle ? (
            typeof subtitle === "string" ? (
              <Text variant="largeBold">{subtitle}</Text>
            ) : (
              subtitle
            )
          ) : null}
        </Flex>
        <Chevron color={theme.colors.textSecondary} direction="e" height={20} />
      </Flex>
    </TouchableArea>
  );
}

// Empty State
type EmptyStateProps = {
  additionalButtonLabel?: string;
  buttonLabel?: string;
  description: string;
  onPress?: () => void;
  onPressAdditional?: () => void;
  title?: string;
  icon?: ReactNode;
};

function EmptyState({
  additionalButtonLabel,
  buttonLabel,
  description,
  onPress,
  onPressAdditional,
  title,
  icon,
}: EmptyStateProps): JSX.Element {
  return (
    <Flex centered gap="spacing24" p="spacing12" width="100%">
      <Flex centered>
        {icon}
        <Flex centered gap="spacing8">
          {title && (
            <Text textAlign="center" variant="medium">
              {title}
            </Text>
          )}
          <Text color="textSecondary" textAlign="center" variant="small">
            {description}
          </Text>
        </Flex>
      </Flex>
      <Flex row>
        {buttonLabel && (
          <TouchableArea hapticFeedback onPress={onPress}>
            <Text color="primary" variant="small">
              {buttonLabel}
            </Text>
          </TouchableArea>
        )}
        {additionalButtonLabel && (
          <TouchableArea onPress={onPressAdditional}>
            <Text color="primary" variant="small">
              {additionalButtonLabel}
            </Text>
          </TouchableArea>
        )}
      </Flex>
    </Flex>
  );
}

// Error State
type ErrorStateProps = {
  title?: string;
  description?: string;
  onRetry?: () => void;
  retryButtonLabel?: string;
  icon?: ReactNode;
};

function ErrorState(props: ErrorStateProps): JSX.Element {
  const {
    title,
    description = "Something went wrong",
    retryButtonLabel,
    onRetry,
    icon,
  } = props;
  return (
    <Flex centered grow gap="spacing24" p="spacing12" width="100%">
      <Flex centered>
        {icon}
        <Flex centered gap="spacing8">
          {title ? (
            <Text textAlign="center" variant="medium">
              {title}
            </Text>
          ) : null}
          <Text color="textSecondary" textAlign="center" variant="small">
            {description}
          </Text>
        </Flex>
      </Flex>
      <Flex row>
        {retryButtonLabel ? (
          <TouchableArea hapticFeedback onPress={onRetry}>
            <Text color="primary" variant="small">
              {retryButtonLabel}
            </Text>
          </TouchableArea>
        ) : null}
      </Flex>
    </Flex>
  );
}

type InlineErrorStateProps = {
  backgroundColor?: keyof Theme["colors"];
  textColor?: keyof Theme["colors"];
} & Pick<ErrorStateProps, "icon" | "title" | "onRetry" | "retryButtonLabel">;

function InlineErrorState(props: InlineErrorStateProps): JSX.Element {
  const theme = useAppTheme();
  const {
    backgroundColor = "background2",
    textColor = "textPrimary",
    title = "Oops! Something went wrong.",
    onRetry: retry,
    retryButtonLabel = "Retry",
    icon = (
      <AlertTriangle
        color={theme.colors.secondary}
        height={theme.iconSizes.icon16}
        width={theme.iconSizes.icon16}
      />
    ),
  } = props;

  return (
    <Flex
      grow
      row
      alignItems="center"
      bg={backgroundColor}
      borderRadius="rounded16"
      gap="spacing24"
      justifyContent="space-between"
      p="spacing12"
      width="100%"
    >
      <Flex row shrink alignItems="center" gap="spacing8">
        {icon}
        <Text
          color={textColor}
          ellipsizeMode="tail"
          numberOfLines={1}
          textAlign="center"
          variant="small"
        >
          {title}
        </Text>
      </Flex>
      {retry ? (
        <TouchableArea hapticFeedback onPress={retry}>
          <Text color="primary" variant="small">
            {retryButtonLabel}
          </Text>
        </TouchableArea>
      ) : null}
    </Flex>
  );
}

export const BaseCard = {
  Container,
  EmptyState,
  ErrorState,
  Header,
  InlineErrorState,
  Shadow,
};
