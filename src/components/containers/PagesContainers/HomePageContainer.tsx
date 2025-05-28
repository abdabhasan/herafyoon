import React from "react";
import WelcomeSVG from "@/assets/illustrations/home-page-welcome.svg";
import { CustomText } from "@/components/CustomText";
import { StyleSheet, View } from "react-native";
import { useFirestore } from "@/hooks/useFirestore";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import PractitionersCardsList from "@/components/lists/PractitionersCardsList";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const HomePageContainer = (props: Props) => {
  const { loadingFeaturedPractitioners, featuredPractitioners } =
    useFirestore();

  if (loadingFeaturedPractitioners) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <WelcomeSVG style={styles.logo} />

      <CustomText
        text={TranslationKeys.homePage.welcome}
        type="title"
        style={{ marginTop: 0, marginBottom: 5 }}
      />
      <CustomText
        text={TranslationKeys.homePage.featuredList}
        type="subtitle"
        style={styles.subtitle}
      />
      <PractitionersCardsList practitionersArray={featuredPractitioners} />
    </View>
  );
};

export default HomePageContainer;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    marginBottom: 150,
  },
  logo: {
    width: 350,
    height: 350,
  },
  subtitle: {
    marginTop: 40,
  },
});
