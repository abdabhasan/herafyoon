import React from "react";
import WelcomeSVG from "@/assets/illustrations/home-page-welcome.svg";
import { CustomText } from "@/components/CustomText";
import PractCardsContainer from "@/components/containers/CardsContainers/PractCardsContainer";
import { StyleSheet, View } from "react-native";
import { useFirestore } from "@/hooks/useFirestore";
import { LoadingSpinner } from "@/components/LoadingSpinner";

type Props = {};

const HomePageContainer = (props: Props) => {
  const { loading } = useFirestore();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <WelcomeSVG style={styles.logo} />

      <CustomText
        text="home_page.welcome"
        type="title"
        style={{ marginTop: 0, marginBottom: 5 }}
      />
      <CustomText
        text="home_page.featured_list"
        type="subtitle"
        style={styles.subtitle}
      />
      <PractCardsContainer />
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
