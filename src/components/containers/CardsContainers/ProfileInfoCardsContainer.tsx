import ProfileInfoCard from "@/components/cards/ProfileInfoCard";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";
import { UserInfo } from "@/types";
import React from "react";

type Props = {
  info: UserInfo | null;
};

const ProfileInfoCardsContainer: React.FC<Props> = ({ info }) => {
  return (
    <>
      {info && (
        <>
          {info?.workType && info?.userType === "practitioner" && (
            <ProfileInfoCard
              name={TranslationKeys.cards.practCard.workType}
              value={info?.workType ?? ""}
            />
          )}
          <ProfileInfoCard
            name={TranslationKeys.cards.practCard.country}
            value={info?.country}
          />
          <ProfileInfoCard
            name={TranslationKeys.cards.practCard.city}
            value={info?.city}
          />
          <ProfileInfoCard
            name={TranslationKeys.cards.practCard.neighbourhood}
            value={info?.neighbourhood}
          />
          <ProfileInfoCard
            name={TranslationKeys.cards.practCard.phone}
            value={info?.phoneNumber}
          />
          <ProfileInfoCard
            name={TranslationKeys.cards.practCard.email}
            value={info?.email}
          />
        </>
      )}
      {!info && <CustomText text="no info available" type="error" />}
    </>
  );
};

export default ProfileInfoCardsContainer;
