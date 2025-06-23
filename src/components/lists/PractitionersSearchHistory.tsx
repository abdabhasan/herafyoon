import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { CustomText } from "@/components/CustomText";
import { useLocalization } from "@/hooks/useLocalization";
import { TranslationKeys } from "@/i18n/translationKeys";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";

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

  const { isRTL } = useLocalization();
  const inputBackgroundColor = useThemeColor({}, "practCardBacgroundColor");

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={onClearHistory}
        style={{
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
      >
        <CustomText
          text={TranslationKeys.searchPage.clear}
          type="error"
          style={styles.clearButtonTxt}
        />
      </TouchableOpacity>
      <View
        style={[
          styles.container,
          {
            backgroundColor: inputBackgroundColor,
          },
        ]}
      >
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
