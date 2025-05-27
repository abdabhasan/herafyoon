import ProfileInfoCard from "@/components/cards/ProfileInfoCard";
import { CustomText } from "@/components/CustomText";
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
              name="cards.pract_card.work_type"
              value={info?.workType ?? ""}
            />
          )}
          <ProfileInfoCard
            name="cards.pract_card.country"
            value={info?.country}
          />
          <ProfileInfoCard name="cards.pract_card.city" value={info?.city} />
          <ProfileInfoCard
            name="cards.pract_card.neighbourhood"
            value={info?.neighbourhood}
          />
          <ProfileInfoCard
            name="cards.pract_card.phone"
            value={info?.phoneNumber}
          />
          <ProfileInfoCard name="cards.pract_card.email" value={info?.email} />
        </>
      )}
      {!info && <CustomText text="no info available" type="error" />}
    </>
  );
};

export default ProfileInfoCardsContainer;
