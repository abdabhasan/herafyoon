import React from "react";
import { CustomLink } from "@/components/Btns/CustomLink";

type Props = {};

const ProfilePageBtnsContainer = (props: Props) => {
  return (
    <>
      <CustomLink
        href="/user/practitioner/signup"
        width="xl"
        color="secondary"
        label="profile_tab.do_u_wanna_be_pract"
        title="profile_tab.create_pract_account"
      />
      <CustomLink
        href="/user/normal/signup"
        width="xl"
        label="profile_tab.do_u_wanna_be_normal_user"
        title="profile_tab.create_normal_account"
      />
      <CustomLink
        href="/user/signin"
        width="xl"
        label="profile_tab.do_u_have_an_account"
        title="profile_tab.signin"
        color="light"
      />
    </>
  );
};

export default ProfilePageBtnsContainer;
