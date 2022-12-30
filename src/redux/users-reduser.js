const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
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
};

const userReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((elem) => {
          if (elem.id === action.userId) {
            return { ...elem, followed: true };
          }
          return elem;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((elem) => {
          if (elem.id === action.userId) {
            return { ...elem, followed: false };
          }
          return elem;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersAC = (users) => ({ type: SET_USERS, users });
export default userReduser;
