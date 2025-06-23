import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { CustomText } from "../CustomText";
import GolderStart from "@/assets/illustrations/golden-star.svg";
import StarNotFilled from "@/assets/illustrations/star-not-filled.svg";
import useFavorites from "@/hooks/useFavorites";
import { useLocalization } from "@/hooks/useLocalization";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";
import { useTheme } from "@/contexts/ThemeContext";

interface PractCardProps {
  id: string;
  firstName: string;
  lastName: string;
  workType: string;
  country?: string;
  city: string;
  neighbourhood: string;
  phoneNumber: string;
}

const PractCard: React.FC<PractCardProps> = ({
  id,
  firstName,
  lastName,
  workType,
  country,
  city,
  neighbourhood,
  phoneNumber,
}) => {
  const { isRTL } = useLocalization();
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(id);
  const cardBackgroundColor = useThemeColor({}, "practCardBacgroundColor");
  const cardBorderColor = useThemeColor({}, "practCardBorderColor");

  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View
      style={[
        styles.card,
        {
          flexDirection: isRTL ? "row-reverse" : "row",
          backgroundColor: cardBackgroundColor,
          borderColor: cardBorderColor,
        },
      ]}
    >
      <View
        style={[
          styles.infoContainer,
          { alignItems: isRTL ? "flex-end" : "flex-start" },
        ]}
      >
        <CustomText text={firstName + " " + lastName} type="primarySubtitle" />
        <CustomText text={workType} type="defaultSemiBold" />
        <View style={{ flexDirection: isRTL ? "row-reverse" : "row" }}>
          <CustomText text={city} type="details" />
          <CustomText text={", "} type="details" />
          <CustomText text={neighbourhood} type="details" />
        </View>
        <View style={{ flexDirection: isRTL ? "row-reverse" : "row" }}>
          <CustomText text={"cards.pract_card.phone"} type="details" />
          <CustomText text={" : "} type="details" />
          <CustomText text={phoneNumber} type="details" />
        </View>
      </View>
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={() => toggleFavorite(id)}>
          {isFavorite ? (
            <GolderStart width={20} height={20} />
          ) : (
            <StarNotFilled
              width={20}
              height={20}
              fill={isDark ? "white" : "black"}
            />
          )}
        </TouchableOpacity>
        <Avatar.Image
          size={50}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2815/2815428.png",
          }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
  },
  infoContainer: {
    flex: 1,
  },
  avatarContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  avatar: {
    backgroundColor: "#eee",
    width: "100%",
  },
});

export default PractCard;
