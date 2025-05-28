import { CustomLink } from "@/components/Btns/CustomLink";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <CustomText type="title" text={TranslationKeys.thisPageDoesntExists} />
        <CustomLink href="/" title={TranslationKeys.goToHomePage} width="xl" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
