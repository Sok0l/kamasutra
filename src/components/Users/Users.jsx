import React from "react";
import s from "./Users.module.css";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              onClick={(e) => {
                props.onPageChanged(page);
              }}
              className={props.currentPage === page ? s.selectedPage : s.pages}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div className={s.userPhoto}>
              <img
                src={
                  user.photos.small != null
                    ? user.photos.small
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAh1BMVEX///8AESEAAAA4O0Tz9PQABxwAABcAABUAABIACBsACx0AAAv+/f8AAAUAAA8CEiPp6uvJy82usLRQU1uWmZu0trnV1tbCxch8foPe4OGMj5RbXmETFyO8v8Fsb3Sho6U7QUgpLTY3OT0wNUANExwZHiZiZmmEh4stMjcADhpiZGwgJC8jJit+LLfjAAAC1UlEQVRoge2a2XKqQBBAoWEAGVYxIqCAuRrNTf7/++4QUy4JizLTWLeqT15SeTn2MlsbTSMIgiAIgiAIgiBU4j37A5iCp3yQKF0VtWHURR6bE6uzcgu+xWaM2QCvh0ibLnzzAIGrn3EBFhOZPS1eQxjqV4Q6/MmmCX0OTP+FtYunsL847m+3rrN9jO/OHBa2yXV7j9/1R6tVLQjesN0VtMfdtB2kuG5z3+kWZTdw5RV0u8WCQ+14r+iseGPnK0x5tG5dZue8v2I2fNqT9QYnQ5T3lbwBNojyfEg+R5Qf/AF5hSjPh+SYkT+15psBuY/Z7Zn1xHXuJX07nO6UiO6hoiMfaxHvy/rRxL1K9W0zqAutwXtvuT2esGtkt6bFoIdtF4pwFkTYbk/0XOtymzmYG8y33NMWLfaQOfOpXg32Tzef5s3QxB4V1/rQtaGMJnwnbwoONnMFMwfccoLHyg1Z9bfefnwc67LCPE06MaMsiqacDDSVNbWbUcDp1x9/RCJ9e89vwv36PPn7G37h4xpsl0N5PYgx0xK4aPkaV5+V3AqbhxHnn8niJV4u45dF8hmczjqLl1i9J7I7315OVBGp71iW44tMnPd6fkQ72FbA9MuZIo6XryTcHDMMDihqMxm4PZ6ARPniE1vqtu8ScwXfKj9aM8PWe+YCF8LQMZS2nYjbCO6LuyGo1R4zyZ05PwXvJwrV2uGuXjsnXodcnTvtHkF10Nzg1WQ+2vU+ktpwd6pafvVI0k+EsFLjjh9o9AuBmlOm+HldvAunUOFOB6YRXfgqXo3JqMBF6AoWe/Z4t30D8rts/sjedgOX32n6B559uGtZ93J01sVaX0rKFyN7vcGX/cKrd8Y9gCW51M3xJW+KLnejkii5QLLoQyPHAbncsGIuJ5e7xT817V4JFmNsNuKHWSA7DTWrpDZGUSeVgueDORJ5sxRP/6cOgiAIgiAIgiCI/5N/mXsntt1KIpQAAAAASUVORK5CYII="
                }
                alt="userPhoto"
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
