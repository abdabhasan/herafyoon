import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import Toast from "react-native-toast-message";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const CustomModal: React.FC<Props> = ({ visible, onClose, children }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <ThemedView style={styles.modalContainer}>{children}</ThemedView>
      </View>
      <Toast />
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "90%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});
