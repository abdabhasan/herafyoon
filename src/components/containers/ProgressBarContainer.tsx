import React from "react";
import { StyleSheet, View } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { CustomButton } from "@/components/Btns/CustomBtn";
import { Colors } from "@/constants/Colors";
import { CustomText } from "../CustomText";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "@/i18n/translationKeys";

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
        <ProgressStep
          label={t(TranslationKeys.progressBar.steps.emailSent)}
          removeBtnRow
        />
        <ProgressStep
          label={t(TranslationKeys.progressBar.steps.emailVerified)}
          removeBtnRow
        >
          <CustomText
            text={TranslationKeys.progressBar.checkYourInbox}
            type="details"
          />
        </ProgressStep>
        <ProgressStep
          label={t(TranslationKeys.progressBar.steps.signupCompleted)}
          removeBtnRow
        />
      </ProgressSteps>
      {currentStep === "completed" ? (
        <CustomButton
          title={TranslationKeys.progressBar.completed}
          disabled={true}
          style={styles.verifyButton}
        />
      ) : (
        <CustomButton
          title={TranslationKeys.progressBar.nextStep}
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
