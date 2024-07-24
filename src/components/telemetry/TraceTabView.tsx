import React from "react";
import { Route, TabView, TabViewProps } from "react-native-tab-view";
import { SectionName } from "features/telemetry/constants";
import { Screens } from "screens/Screens";

type TraceRouteProps = { key: SectionName } & Route;

export default function TraceTabView<T extends TraceRouteProps>({
  onIndexChange,
  navigationState,
  screenName,
  ...rest
}: TabViewProps<T> & { screenName: Screens }): JSX.Element {
  const onIndexChangeTrace = (index: number): void => {
    onIndexChange(index);
  };

  return (
    <TabView
      navigationState={navigationState}
      onIndexChange={onIndexChangeTrace}
      {...rest}
    />
  );
}
