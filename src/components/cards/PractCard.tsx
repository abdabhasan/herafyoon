import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { CustomText } from "../CustomText";
import GolderStart from "@/assets/illustrations/golden-star.svg";
import StarNotFilled from "@/assets/illustrations/star-not-filled.svg";
import useFavorites from "@/hooks/useFavorites";
import { useLocalization } from "@/hooks/useLocalization";

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

  return (
    <View
      style={[styles.card, { flexDirection: isRTL ? "row-reverse" : "row" }]}
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
            <StarNotFilled width={20} height={20} />
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
    backgroundColor: "#f7f7f7",
    borderColor: "#e0e0e0",
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
