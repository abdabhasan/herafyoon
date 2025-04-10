import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs/src/types";
import { PlatformPressable } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";
import { GestureResponderEvent } from "react-native";

export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(ev: GestureResponderEvent) => {
        if (process.env.EXPO_OS === "ios") {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}
