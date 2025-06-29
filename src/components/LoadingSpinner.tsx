import { Colors } from "@/constants/Colors";
import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

type SizeOption = "l" | "m" | "sm" | "xs";

type Props = {
  style?: StyleProp<ViewStyle>;
  size?: SizeOption;
};

const sizeMap: Record<SizeOption, number> = {
  xs: 25,
  sm: 35,
  m: 45,
  l: 70,
};

export const LoadingSpinner: React.FC<Props> = ({ style, size = "l" }) => {
  const spinnerSize = sizeMap[size];

  return (
    <View style={[style, styles.container]}>
      <ActivityIndicator size={spinnerSize} color={Colors.primary.p500} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.transparent,
  },
});
