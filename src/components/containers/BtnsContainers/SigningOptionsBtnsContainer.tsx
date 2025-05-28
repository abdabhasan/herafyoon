import React from "react";
import { CustomLink } from "@/components/Btns/CustomLink";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const SigningOptionsBtnsContainer = (props: Props) => {
  return (
    <>
      <CustomLink
        href="/user/practitioner/signup"
        width="xl"
        color="secondary"
        label={TranslationKeys.profileTab.doUWannaBePract}
        title={TranslationKeys.profileTab.createPractAccount}
      />
      <CustomLink
        href="/user/normal/signup"
        width="xl"
        label={TranslationKeys.profileTab.doUWannaBeNormalUser}
        title={TranslationKeys.profileTab.createNormalAccount}
      />
      <CustomLink
        href="/user/signin"
        width="xl"
        label={TranslationKeys.profileTab.doUHaveAnAccount}
        title={TranslationKeys.profileTab.signin}
        color="light"
      />
    </>
  );
};

export default SigningOptionsBtnsContainer;
