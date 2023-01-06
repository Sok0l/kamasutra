import Users from "./Users";
import { connect } from "react-redux";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  setUserTotalCountAC,
} from "../../redux/users-reduser";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setUserTotalCount: (totalCount) => {
      dispatch(setUserTotalCountAC(totalCount));
    },
  };
};

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UserContainer;
