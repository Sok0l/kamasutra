const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USER_TOTAL_COUNT = "SET-USER-TOTAL-COUNT";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 2,
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
      return { ...state, users: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_USER_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.count };
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
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUserTotalCountAC = (count) => ({
  type: SET_USER_TOTAL_COUNT,
  count,
});
export default userReduser;
