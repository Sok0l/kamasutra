import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USER_TOTAL_COUNT = "SET-USER-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 2,
  isFetching: false,
  followingInProgress: [],
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
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });

export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUserTotalCount = (count) => ({
  type: SET_USER_TOTAL_COUNT,
  count,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  userAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUserTotalCount(data.totalCount));
  });
};
export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  userAPI.follow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};
export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  userAPI.unfollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};

export default userReduser;
