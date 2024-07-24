import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CenterBox } from "components/layout/CenterBox";
import { useAppTheme } from "app/hooks";
import { Text } from "components/Text";
import { colors } from "styles/color";

import HomeScreen from "../HomeScreen";
import DiscoverScreen from "../DiscoverScreen";
import BrowserScreen from "../BrowserScreen";
import SettingsScreen from "../SettingsScreen";
import { Screens } from "../Screens";

import CategoryIcon from "assets/icons/category.svg";
import CategoryFilledIcon from "assets/icons/category-filled.svg";
import WalletIcon from "assets/icons/wallet.svg";
import WalletFilledIcon from "assets/icons/wallet-filled.svg";
import DiscoveryIcon from "assets/icons/discovery.svg";
import DiscoveryFilledIcon from "assets/icons/discovery-filled.svg";
import SettingIcon from "assets/icons/setting.svg";
import SettingFilledIcon from "assets/icons/setting-filled.svg";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const theme = useAppTheme();

  const activeColor = theme.colors.primary;
  const inActiveColor = theme.colors.secondary;

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            height: 112,
            borderTopWidth: 0,
          },
          tabBarItemStyle: { paddingVertical: 16 },
          tabBarLabel: () => {
            return null;
          },
        }}
      >
        <Tab.Screen
          name={Screens.Home}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <CenterBox>
                {focused ? (
                  <WalletFilledIcon />
                ) : (
                  <WalletIcon color={colors.greyscale500} />
                )}
              </CenterBox>
            ),
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  variant={"XSmallMedium"}
                  color={focused ? "primary" : "greyscale500"}
                  fontFamily={""}
                >
                  {"Home"}
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name={Screens.Discover}
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <CenterBox>
                {focused ? (
                  <DiscoveryFilledIcon />
                ) : (
                  <DiscoveryIcon color={colors.greyscale500} />
                )}
              </CenterBox>
            ),
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  variant={"XSmallMedium"}
                  color={focused ? "primary" : "greyscale500"}
                >
                  {"Discover"}
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name={Screens.Browser}
          component={BrowserScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <CenterBox>
                {focused ? (
                  <CategoryFilledIcon />
                ) : (
                  <CategoryIcon color={colors.greyscale500} />
                )}
              </CenterBox>
            ),
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  variant={"XSmallMedium"}
                  color={focused ? "primary" : "greyscale500"}
                >
                  {"Browser"}
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name={Screens.Settings}
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <CenterBox>
                {focused ? (
                  <SettingFilledIcon />
                ) : (
                  <SettingIcon color={colors.greyscale500} />
                )}
              </CenterBox>
            ),
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  variant={"XSmallMedium"}
                  color={focused ? "primary" : "greyscale500"}
                >
                  {"Settings"}
                </Text>
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
