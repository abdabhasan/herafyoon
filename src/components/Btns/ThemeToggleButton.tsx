import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");
  const animatedValue = new Animated.Value(isDarkMode ? 1 : 0);

  const handleToggle = () => {
    const toValue = isDarkMode ? 0 : 1;
    Animated.timing(animatedValue, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#00bc7d", "#fff"],
  });
  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [5, 28], // Move icon from left to right
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[{ backgroundColor, borderRadius: 100 }]}>
        <TouchableOpacity
          onPress={handleToggle}
          style={[styles.btn, { flexDirection: "row", alignItems: "center" }]}
        >
          <Animated.View
            style={{
              transform: [{ translateX }],
              position: "absolute",
              left: 0,
              borderRadius: 100,
              backgroundColor: isDarkMode ? "#151718" : "#ECEDEE",
              paddingHorizontal: 6,
              paddingVertical: 1,
            }}
          >
            <Icon
              name={isDarkMode ? "moon-o" : "sun-o"}
              size={18}
              color={isDarkMode ? "#ECEDEE" : "#000"}
            />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginHorizontal: 10,
    marginTop: -5,
  },
  btn: {
    width: 60,
    borderRadius: 100,
    padding: 14,
  },
});

export default ThemeToggleButton;
