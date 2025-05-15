import React from "react";
import { StyleSheet, View } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { CustomButton } from "@/components/Btns/CustomBtn";
import { Colors } from "@/constants/Colors";
import { CustomText } from "../CustomText";

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
        <ProgressStep label="Email Sent" removeBtnRow />
        <ProgressStep label="Email Verified" removeBtnRow>
          <CustomText
            text="please click the link we sent to your email"
            type="details"
          />
        </ProgressStep>
        <ProgressStep label="Signup Completed" removeBtnRow />
      </ProgressSteps>
      {currentStep === "completed" ? (
        <CustomButton
          title="Completed !"
          disabled={true}
          style={styles.verifyButton}
        />
      ) : (
        <CustomButton
          title="Next step"
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
  },
});
