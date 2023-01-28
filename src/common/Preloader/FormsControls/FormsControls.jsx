import React from "react";
import s from "./FormControls.module.css";

export const FormControl = ({ input, child, meta, types, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
      <div>
        {types === "input" ? (
          <input {...input} {...props} />
        ) : (
          <textarea {...input} {...props} />
        )}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
