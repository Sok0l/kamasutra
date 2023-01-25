import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./PorfileStatus/ProfileStatusWithHooks";
import s from "./ProfileInfo.module.css";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.avatar}>
        <img alt="avatar" src={profile.photos.large} />
        <div className={s.descriptionBlock}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          <h2>Лев Соколов</h2>
          <h3>Date of Birth: 27 may</h3>
          <h3>City: Pskov</h3>
          <h3>Education:BNTU</h3>
          <h3>Web Site:https://vk.com/id18479289</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
