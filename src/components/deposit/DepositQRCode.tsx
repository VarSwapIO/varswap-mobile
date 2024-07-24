import React from "react";
import { FadeIn, FadeOut } from "react-native-reanimated";

import { useAppTheme } from "app/hooks";
// import { AddressDisplay } from "components/addressDisplay";
import { GradientBackground } from "components/gradients/GradientBackground";
// import {UniconThemedGradient} from 'components/gradients/UniconThemedGradient';
import { AnimatedFlex } from "components/layout";
import { QRCodeDisplay } from "components/QRCodeScanner/QRCode";
// import {useUniconColors} from 'components/unicons/utils';
import { useIsDarkMode } from "features/appearance/hooks";

const QR_CODE_SIZE = 220;
const UNICON_SIZE = QR_CODE_SIZE / 2.8;

interface Props {
  address?: Address;
  logoToken?: string;
}

export function DepositQRCode({
  address,
  logoToken,
}: Props): JSX.Element | null {
  const theme = useAppTheme();
  const isDarkMode = useIsDarkMode();
  // const gradientData = useUniconColors(address);

  if (!address) return null;

  return (
    <>
      <GradientBackground>
        {/* <UniconThemedGradient
          middleOut
          borderRadius="rounded16"
          gradientEndColor={theme.colors.background0}
          gradientStartColor={gradientData.glow}
          opacity={isDarkMode ? 0.24 : 0.2}
        /> */}
      </GradientBackground>
      <AnimatedFlex
        centered
        grow
        entering={FadeIn}
        exiting={FadeOut}
        gap="spacing24"
        // mb="spacing48"
        py="spacing24"
      >
        <QRCodeDisplay
          hideOutline
          address={address}
          backgroundColor="background"
          containerBackgroundColor="background"
          displayShadow={true}
          logoSize={UNICON_SIZE}
          overlayOpacityPercent={10}
          safeAreaColor="background"
          size={QR_CODE_SIZE}
          logoToken={logoToken}
        />
      </AnimatedFlex>
    </>
  );
}
