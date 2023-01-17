import { addMessageActionCreator } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: (newMessageBady) => {
      dispatch(addMessageActionCreator(newMessageBady));
    },
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
