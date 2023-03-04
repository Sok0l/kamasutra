import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

let Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  ...props
}) => {
  return (
    <div>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      {props.users.map((user) => (
        <User
          user={user}
          key={user.id}
          followingInProgress={props.followingInProgress}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      ))}
    </div>
  );
};

export default Users;
