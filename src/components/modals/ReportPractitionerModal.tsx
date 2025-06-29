import React from "react";
import CustomModal from "./CustomModal";
import { LoadingSpinner } from "../LoadingSpinner";
import { View, StyleSheet } from "react-native";
import { CustomButton } from "../Btns/CustomBtn";
import { TranslationKeys } from "@/i18n/translationKeys";
import { CustomText } from "../CustomText";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
};

const ReportPractitionerModal: React.FC<Props> = ({
  visible,
  onClose,
  onConfirm,
  loading,
}) => {
  return (
    <>
      <CustomModal visible={visible} onClose={onClose}>
        <CustomText text={TranslationKeys.reportPractitioner.areYouSure} />

        {loading && (
          <LoadingSpinner size="sm" style={{ alignSelf: "center" }} />
        )}

        <View style={styles.buttonContainer}>
          <CustomButton
            title={TranslationKeys.reportPractitioner.yesReport}
            onPress={onConfirm}
            style={styles.dangerBtn}
            disabled={loading}
          />
          <CustomButton
            title={TranslationKeys.reportPractitioner.close}
            color="secondary"
            onPress={onClose}
            disabled={loading}
          />
        </View>
      </CustomModal>
    </>
  );
};

export default ReportPractitionerModal;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "space-between",
    width: "100%",

    marginTop: 30,
  },
  dangerBtn: {
    backgroundColor: "#F23847",
  },
});
