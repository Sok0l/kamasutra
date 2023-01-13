import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
