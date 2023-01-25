import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activedeEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activedeEditMode}>
            {props.status || "---------"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
