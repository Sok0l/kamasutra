import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
