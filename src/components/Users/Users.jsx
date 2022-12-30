import React from "react";
import s from "./Users.module.css";
import { follow, unfollow } from "./UsersContainer";

const Users = (props) => {
  if (props.users.length === 0)
    props.setUsers({
      users: [
        {
          id: 1,
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZw8Y8YK4Qe1HEHyzbFaBQvkF-i_6PceKyA&usqp=CAU",
          followed: false,
          fullName: "Dmitry",
          status: "i like world!",
          location: { city: "Minck", country: "Belarus" },
        },
        {
          id: 2,
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZw8Y8YK4Qe1HEHyzbFaBQvkF-i_6PceKyA&usqp=CAU",
          followed: true,
          fullName: "Alex",
          status: "i dont like world!",
          location: { city: "Pskov", country: "Russia" },
        },
        {
          id: 3,
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZw8Y8YK4Qe1HEHyzbFaBQvkF-i_6PceKyA&usqp=CAU",
          followed: false,
          fullName: "Max",
          status: "i like pets!",
          location: { city: "Kiev", country: "Ukraine" },
        },
        {
          id: 4,
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZw8Y8YK4Qe1HEHyzbFaBQvkF-i_6PceKyA&usqp=CAU",
          followed: true,
          fullName: "Gitler",
          status: "i am the best!",
          location: { city: "Berlin", country: "Germany" },
        },
      ],
    });
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div className={s.userPhoto}>
              <img src={user.photoUrl} />
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
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
