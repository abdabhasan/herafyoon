import ProfileInfoCard from "@/components/cards/ProfileInfoCard";
import React from "react";

type Props = {
  info: any;
};

const ProfileInfoCardsContainer = ({ info }) => {
  return (
    <>
      <ProfileInfoCard
        name="cards.pract_card.work_type"
        value={info?.workType}
      />
      <ProfileInfoCard name="cards.pract_card.country" value={info?.country} />
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
  );
};

export default ProfileInfoCardsContainer;
