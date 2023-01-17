import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./PorfileStatus/ProfileStatus";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.avatar}>
        <img alt="avatar" src={props.profile.photos.large} />
        <div className={s.descriptionBlock}>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
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
