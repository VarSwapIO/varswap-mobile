import Carousel from "react-native-snap-carousel";
import FastImage from "react-native-fast-image";
import { StyleSheet } from "react-native";
import { useEffect, useRef } from "react";
import SInfo from "react-native-sensitive-info";

import { useOnboardingStackNavigation } from "app/navigation/types";
import { Screen } from "components/layout/Screen";
import { Flex } from "components/layout";
import { Text } from "components/Text";
import { BackHeader } from "components/layout/BackHeader";
import { Button, ButtonEmphasis } from "components/buttons/Button";
import { TouchableArea } from "components/buttons/TouchableArea";
// import LogoHeader from "features/onboarding/LogoHeader";
import { Screens } from "../Screens";
import { dimensions } from "styles/sizing";
import {
  ONBOARDING_FRAME,
  ONBOARDING_FRAME_2,
  ONBOARDING_FRAME_3,
} from "assets/index";

export default function OnboardingScreen() {
  const navigation = useOnboardingStackNavigation();

  const slideRef = useRef<Carousel>(null);

  const data = [
    {
      uri: ONBOARDING_FRAME,
      title: "Best Crypto Wallet On Vara Network",
      description:
        "Explore the top wallet for Vara Network, offering security, ease of use, and seamless crypto integration.",
    },
    {
      uri: ONBOARDING_FRAME_2,
      title: "Your Security is Our Top Priority",
      description:
        "Enjoy top-tier protection and peace of mind with our advanced security measures.",
    },
    {
      uri: ONBOARDING_FRAME_3,
      title: "Crypto Transactions Now is Easier",
      description:
        "Experience seamless and fast crypto transactions with our user-friendly platform, designed for convenience and efficiency.",
    },
  ];

  const onPressNext = (index: number) => {
    if (index == 2) {
      navigation.navigate(Screens.LoginSocialScreen);
    } else {
      slideRef.current.snapToNext();
    }
  };

  const renderItem = ({ item, index }: any) => (
    <>
      <Flex
        flex={3}
        backgroundColor={"background"}
        px={"spacing16"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <FastImage
          resizeMode={"contain"}
          source={item.uri}
          style={style.imgBannerStyle}
        />
        <Flex>
          <Text variant={"H2"} textAlign={"center"} color={"primary"}>
            {item.title}
          </Text>
          <Text
            variant={"XlargeMedium"}
            textAlign={"center"}
            color={"textSecondary"}
          >
            {item.description}
          </Text>
        </Flex>
      </Flex>

      <Flex
        fill
        px={"spacing16"}
        justifyContent={"center"}
        gap="spacing24"
        // alignSelf={"center"}
        // width={"24%"}
      >
        <Button
          emphasis={ButtonEmphasis.Primary}
          label={index != 2 ? "Next" : "Get Started"}
          onPress={() => onPressNext(index)}
        />
      </Flex>
    </>
  );

  useEffect(() => {
    SInfo.setItem(`showOnboardingBanner`, "False", {
      sharedPreferencesName: "mySharedPrefs",
      keychainService: "myKeychain",
    });
  }, []);

  return (
    <Screen edges={["top", "left", "right"]} bg={"background"}>
      <Flex fill backgroundColor={"background"}>
        <Carousel
          layout="default"
          vertical={false}
          data={data}
          sliderWidth={dimensions.fullWidth}
          itemWidth={dimensions.fullWidth}
          // loop={true}
          activeSlideAlignment={"start"}
          inactiveSlideScale={0.8}
          // autoplayInterval={3000}
          // autoplay={true}
          renderItem={renderItem}
          inactiveSlideOpacity={1}
          // centerContent={true}
          ref={slideRef}
          // onSnapToItem={(index: any) => setActiveIndex(index)}
        />
      </Flex>
    </Screen>
  );
}

const style = StyleSheet.create({
  imgBannerStyle: {
    height: (dimensions.fullWidth - 64) * 0.95,
    width: dimensions.fullWidth - 64,
  },
});
