import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { CustomText } from "@/components/CustomText";
import { useTranslation } from "react-i18next";

interface PractitionersSearchHistoryProps {
  history: string[];
  onSelectHistory: (query: string) => void;
  onClearHistory: () => void;
}

const PractitionersSearchHistory = ({
  history,
  onSelectHistory,
  onClearHistory,
}: PractitionersSearchHistoryProps) => {
  if (history.length === 0) return null;

  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={onClearHistory}
        style={{
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
      >
        <CustomText
          text="search_page.clear"
          type="error"
          style={styles.clearButtonTxt}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        {history.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => onSelectHistory(item)}>
            <CustomText
              text={item}
              type="defaultDark"
              style={styles.historyItem}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "90%",
  },
  container: {
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  historyItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
  clearButtonTxt: {
    paddingHorizontal: 10,
    fontSize: 10,

    marginTop: 0,
  },
});

export default PractitionersSearchHistory;
