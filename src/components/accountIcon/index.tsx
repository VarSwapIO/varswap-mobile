import React from "react";
import { StyleSheet } from "react-native";
import Svg, {
  Defs,
  RadialGradient as RadialGradientSVG,
  Rect,
  Stop,
} from "react-native-svg";

import { useAppTheme } from "app/hooks";
import Eye from "assets/icons/eyes.svg";
import { RemoteImage } from "components/images/RemoteImage";
import { Box } from "components/layout";
// import {Unicon} from 'components/unicons/Unicon';
// import {useUniconColors} from 'components/unicons/utils';
import { useIsDarkMode } from "features/appearance/hooks";
import { theme as FixedTheme } from "styles/theme";

interface Props {
  size: number;
  showViewOnlyBadge?: boolean;
  address: string;
  avatarUri?: string | null;
  showBackground?: boolean; // Display images with solid background.
}

const INSET_PADDING = FixedTheme.spacing.spacing16;

export function AccountIcon({
  size,
  showViewOnlyBadge,
  address,
  avatarUri,
  showBackground,
}: Props): JSX.Element {
  const theme = useAppTheme();

  // If background, add padding and center Unicons. Leave ENS avatars as is.
  const shouldShowUniconInsetPadding = !avatarUri && showBackground;

  // If Unicon and background, reduce size to account for added padding.
  const adjustedIconSize = shouldShowUniconInsetPadding
    ? size - INSET_PADDING * 2
    : size;

  // Color for gradient background.
  // const {gradientStart: uniconColor} = useUniconColors(address);

  const iconPadding = FixedTheme.spacing.spacing2;
  const iconEyeContainerSize = size * 0.45;
  const iconEyeSize = iconEyeContainerSize - iconPadding;

  const isDarkMode = useIsDarkMode();

  const defaultImage = (
    <>
      {/* <Unicon address={address} size={adjustedIconSize} />
      {showBackground ? (
        <UniconGradient color={uniconColor} size={size} />
      ) : null} */}
    </>
  );

  return (
    <Box
      backgroundColor={showBackground ? "background" : "none"}
      borderColor={showBackground ? "background" : "none"}
      borderRadius="roundedFull"
      borderWidth={showBackground ? 2 : 0}
      position="relative"
      style={{
        padding: shouldShowUniconInsetPadding
          ? INSET_PADDING
          : FixedTheme.spacing.none,
      }}
    >
      {avatarUri ? (
        <RemoteImage
          borderRadius={adjustedIconSize}
          fallback={defaultImage}
          height={adjustedIconSize}
          uri={avatarUri}
          width={adjustedIconSize}
        />
      ) : (
        defaultImage
      )}
      {showViewOnlyBadge && (
        <Box
          alignContent="center"
          alignItems="center"
          backgroundColor={isDarkMode ? "background" : "background"}
          borderRadius="roundedFull"
          bottom={0}
          height={iconEyeContainerSize}
          justifyContent="center"
          p="spacing4"
          position="absolute"
          right={0}
          shadowColor="black"
          shadowOffset={{ width: 0, height: 0 }}
          shadowOpacity={0.2}
          shadowRadius={10}
          width={iconEyeContainerSize}
        >
          <Eye color={theme.colors.secondary} width={iconEyeSize} />
        </Box>
      )}
    </Box>
  );
}

// Circle shaped gradient that follows Unicon colors.
const UniconGradient = ({
  color,
  size,
}: {
  color: string;
  size: number;
}): JSX.Element => {
  return (
    <Svg height={size} style={UniconGradientStyles.svg} width={size}>
      <Defs>
        <RadialGradientSVG cy="-0.1" id="background" rx="0.8" ry="1.1">
          <Stop offset="0" stopColor={color} stopOpacity="0.6" />
          <Stop offset="1" stopColor={color} stopOpacity="0" />
        </RadialGradientSVG>
      </Defs>
      <Rect
        fill="url(#background)"
        height="100%"
        opacity={0.6}
        rx={size}
        width="100%"
        x="0"
        y="0"
      />
    </Svg>
  );
};

const UniconGradientStyles = StyleSheet.create({
  svg: {
    position: "absolute",
  },
});
