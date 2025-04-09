import React from "react";
import { CustomText } from "@/components/CustomText";
import { View, StyleSheet, ScrollView } from "react-native";
import TestingIluustration from "@/assets/illustrations/construction-worker-bro.svg";
import { CustomLink } from "@/components/Btns/CustomLink";

const ProfileCards = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <TestingIluustration style={styles.logo}></TestingIluustration>
        <CustomText type="title">أهلا وسهلا</CustomText>

        <CustomLink
          href="/"
          width="xl"
          color="secondary"
          label=" هل تريد الإنضام معنا كحرفي؟"
          title="أنشئ حساب حرفي"
        />
        <CustomLink
          href="/"
          width="xl"
          label=" هل تريد الإنضام معنا كمستخدم عادي؟"
          title="أنشئ حساب عادي"
        />
        <CustomLink
          href="/"
          width="xl"
          title="تسجيل الدخول"
          label="هل تملك حساب؟"
          color="light"
        />
      </View>
    </ScrollView>
  );
};

export default ProfileCards;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },

  container: {
    padding: 16,
    alignItems: "center",
    marginBottom: 150,
    marginTop: 50,
  },
  logo: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
