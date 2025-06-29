import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useReportPractitioner } from "@/hooks/useReportPractitioner";
import ReportPractitionerModal from "../modals/ReportPractitionerModal";

type Props = {
  practitionerId: string;
};

const ReportPractitionerButton: React.FC<Props> = ({ practitionerId }) => {
  const { openModal, modalVisible, closeModal, reportPractitioner, loading } =
    useReportPractitioner(practitionerId);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <MaterialIcons name={"report"} size={24} color={"#79717A"} />
      </TouchableOpacity>

      <ReportPractitionerModal
        visible={modalVisible}
        onClose={closeModal}
        onConfirm={reportPractitioner}
        loading={loading}
      />
    </View>
  );
};

export default ReportPractitionerButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonContainer: {
    justifyContent: "space-between",
    width: "100%",

    marginTop: 30,
  },
  dangerBtn: {
    backgroundColor: "#F23847",
  },
});
