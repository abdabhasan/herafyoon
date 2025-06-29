import { CustomText } from "@/components/CustomText";
import { Colors } from "@/constants/Colors";
import React from "react";
import { useLocalization } from "@/hooks/useLocalization";
import { StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";

type ProfileInfoCardProps = {
  name: string;
  value: string;
};

const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({ name, value }) => {
  const { isRTL } = useLocalization();
  const borderColor = useThemeColor({}, "inputBorderColor");

  return (
    <>
      <ThemedView
        style={[
          styles.infoContainer,
          { flexDirection: isRTL ? "row-reverse" : "row" },
          { borderColor },
        ]}
      >
        <CustomText text={name} type="details" style={styles.infoLabel} />
        <CustomText text={" : "} type="details" style={styles.infoLabel} />
        <CustomText text={value} type="details" />
      </ThemedView>
    </>
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
  },
  infoLabel: {
    fontWeight: "bold",
    color: Colors.primary.p500,
  },
});
