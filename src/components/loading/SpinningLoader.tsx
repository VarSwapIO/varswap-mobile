import React, { useEffect } from "react";
import {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useAppTheme } from "app/hooks";
import Loader from "assets/icons/circle-spinner.svg";
import EmptySpinner from "assets/icons/empty-spinner.svg";
import { AnimatedBox } from "components/layout";
import { Theme } from "styles/theme";

export function SpinningLoader({
  size = 20,
  disabled,
  color,
}: {
  size?: number;
  disabled?: boolean;
  color?: keyof Theme["colors"];
}): JSX.Element {
  const theme = useAppTheme();
  const rotation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.bezier(0.83, 0, 0.17, 1),
      }),
      -1
    );
    return () => cancelAnimation(rotation);
  }, [rotation]);

  if (disabled) {
    return (
      <EmptySpinner
        color={theme.colors.background3}
        height={size}
        width={size}
      />
    );
  }
  return (
    <AnimatedBox style={[animatedStyles]}>
      <Loader
        color={theme.colors[color ?? "textPrimary"]}
        height={size}
        width={size}
      />
    </AnimatedBox>
  );
}
