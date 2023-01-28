import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../../../../common/Preloader/FormsControls/FormsControls";
import s from "./../ProfileInfo.module.css";

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>{<button>save</button>}</div>
      {error && <div className={s.formSummoryError}>{error}</div>}
      <div>
        <b>Full Name</b>:
        <Field
          validate={[]}
          placeholder={"Full Name"}
          name={"fullName"}
          component={FormControl}
          types="input"
        />
      </div>
      <div>
        <b>Looking for a job</b>:{" "}
        <Field
          validate={[]}
          placeholder={""}
          name={"lookingForAJob"}
          component={FormControl}
          types="input"
          type={"checkbox"}
        />
      </div>
      <b>My professianal skills</b>:
      <Field
        validate={[]}
        placeholder={"My professional skills"}
        name={"lookingForAJobDescription"}
        component={FormControl}
        types="textarea"
      />
      <div>
        <b>About me</b>:
        <Field
          validate={[]}
          placeholder={"About me"}
          name={"aboutMe"}
          component={FormControl}
          types="textarea"
        />
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>{key}</b>:
              <Field
                validate={[]}
                placeholder={key}
                name={`contacts.${key}`}
                component={FormControl}
                types="input"
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
