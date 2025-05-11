import { CustomText } from "@/components/CustomText";
import { Colors } from "@/constants/Colors";
import React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";

type ProfileInfoCardProps = {
  name: string;
  value: string;
};

const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({ name, value }) => {
  const { i18n } = useTranslation();

  const isRTL = i18n.language === "ar";

  return (
    <div>
      <View
        style={[
          styles.infoContainer,
          { flexDirection: isRTL ? "row-reverse" : "row" },
        ]}
      >
        <CustomText text={name} type="details" style={styles.infoLabel} />
        <CustomText text={" : "} type="details" style={styles.infoLabel} />
        <CustomText text={value} type="details" />
      </View>
    </div>
  );
};

export default ProfileInfoCard;

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.primary.p500,
  },
  infoLabel: {
    fontWeight: "bold",
    color: Colors.primary.p500,
  },
});
