import React from "react";
import { StyleSheet, View } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { CustomButton } from "@/components/Btns/CustomBtn";
import { Colors } from "@/constants/Colors";
import { CustomText } from "../CustomText";
import { useTranslation } from "react-i18next";

interface ProgressBarContainerProps {
  currentStep: "emailSent" | "emailVerified" | "completed";
  onVerifyEmail: () => void;
  loading: boolean;
}

export const ProgressBarContainer: React.FC<ProgressBarContainerProps> = ({
  currentStep,
  onVerifyEmail,
  loading,
}) => {
  const stepIndex = {
    emailSent: 0,
    emailVerified: 1,
    completed: 2,
  };

  const { t } = useTranslation();
  const currentStepNumber = stepIndex[currentStep];

  return (
    <View style={styles.container}>
      <ProgressSteps
        activeStep={currentStepNumber}
        activeStepIconBorderColor={Colors.primary.p500}
        progressBarColor={Colors.primary.p500}
        completedProgressBarColor={Colors.primary.p500}
        completedStepIconColor={Colors.primary.p500}
        isComplete={currentStep === "completed"}
      >
        <ProgressStep label={t("progress_bar.steps.email_sent")} removeBtnRow />
        <ProgressStep
          label={t("progress_bar.steps.email_verified")}
          removeBtnRow
        >
          <CustomText text={"progress_bar.check_your_inbox"} type="details" />
        </ProgressStep>
        <ProgressStep
          label={t("progress_bar.steps.signup_completed")}
          removeBtnRow
        />
      </ProgressSteps>
      {currentStep === "completed" ? (
        <CustomButton
          title="progress_bar.completed"
          disabled={true}
          style={styles.verifyButton}
        />
      ) : (
        <CustomButton
          title="progress_bar.next_step"
          onPress={onVerifyEmail}
          disabled={loading}
          style={styles.verifyButton}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  verifyButton: {
    marginTop: 10,
    width: 100,
  },
});
