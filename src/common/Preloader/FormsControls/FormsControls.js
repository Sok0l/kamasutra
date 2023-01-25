import React from "react";

import s from "./FormControls.module.css";

export const FormControl = ({ input, child, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
      <div>
        {props.types === "input" ? (
          <input {...input} {...props} />
        ) : (
          <textarea {...input} {...props} />
        )}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
