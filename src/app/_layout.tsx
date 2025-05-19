import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <SafeAreaView style={styles.container}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
          <Toast />
        </SafeAreaView>
      </I18nextProvider>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
