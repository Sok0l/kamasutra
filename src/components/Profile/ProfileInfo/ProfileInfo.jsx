import React, { useState } from "react";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./PorfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import s from "./ProfileInfo.module.css";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  savePhoto,
  isOwner,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelector = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={s.descriptionBlock}>
      <div className={s.avatar}>
        <img
          alt="avatar"
          src={
            profile.photos.large ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAh1BMVEX///8AESEAAAA4O0Tz9PQABxwAABcAABUAABIACBsACx0AAAv+/f8AAAUAAA8CEiPp6uvJy82usLRQU1uWmZu0trnV1tbCxch8foPe4OGMj5RbXmETFyO8v8Fsb3Sho6U7QUgpLTY3OT0wNUANExwZHiZiZmmEh4stMjcADhpiZGwgJC8jJit+LLfjAAAC1UlEQVRoge2a2XKqQBBAoWEAGVYxIqCAuRrNTf7/++4QUy4JizLTWLeqT15SeTn2MlsbTSMIgiAIgiAIgiBU4j37A5iCp3yQKF0VtWHURR6bE6uzcgu+xWaM2QCvh0ibLnzzAIGrn3EBFhOZPS1eQxjqV4Q6/MmmCX0OTP+FtYunsL847m+3rrN9jO/OHBa2yXV7j9/1R6tVLQjesN0VtMfdtB2kuG5z3+kWZTdw5RV0u8WCQ+14r+iseGPnK0x5tG5dZue8v2I2fNqT9QYnQ5T3lbwBNojyfEg+R5Qf/AF5hSjPh+SYkT+15psBuY/Z7Zn1xHXuJX07nO6UiO6hoiMfaxHvy/rRxL1K9W0zqAutwXtvuT2esGtkt6bFoIdtF4pwFkTYbk/0XOtymzmYG8y33NMWLfaQOfOpXg32Tzef5s3QxB4V1/rQtaGMJnwnbwoONnMFMwfccoLHyg1Z9bfefnwc67LCPE06MaMsiqacDDSVNbWbUcDp1x9/RCJ9e89vwv36PPn7G37h4xpsl0N5PYgx0xK4aPkaV5+V3AqbhxHnn8niJV4u45dF8hmczjqLl1i9J7I7315OVBGp71iW44tMnPd6fkQ72FbA9MuZIo6XryTcHDMMDihqMxm4PZ6ARPniE1vqtu8ScwXfKj9aM8PWe+YCF8LQMZS2nYjbCO6LuyGo1R4zyZ05PwXvJwrV2uGuXjsnXodcnTvtHkF10Nzg1WQ+2vU+ktpwd6pafvVI0k+EsFLjjh9o9AuBmlOm+HldvAunUOFOB6YRXfgqXo3JqMBF6AoWe/Z4t30D8rts/sjedgOX32n6B559uGtZ93J01sVaX0rKFyN7vcGX/cKrd8Y9gCW51M3xJW+KLnejkii5QLLoQyPHAbncsGIuJ5e7xT817V4JFmNsNuKHWSA7DTWrpDZGUSeVgueDORJ5sxRP/6cOgiAIgiAIgiCI/5N/mXsntt1KIpQAAAAASUVORK5CYII="
          }
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelector} />}
      </div>
      <div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      {editMode ? (
        <ProfileDataForm
          initialValues={profile}
          profile={profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          goToEditMode={() => {
            setEditMode(true);
          }}
          profile={profile}
          isOwner={isOwner}
        />
      )}
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <div>{isOwner && <button onClick={goToEditMode}>edit</button>}</div>
      <div>
        <b>Full Name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professianal skills</b>:{profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
