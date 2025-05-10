import React from "react";
import { CustomText } from "@/components/CustomText";
import PractCardsContainer from "@/components/containers/PractCardsContainer";

export default function Index() {
  return (
    <>
      <CustomText text="welcome to the home page" type="title" />
      <PractCardsContainer />
    </>
  );
}
