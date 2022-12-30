import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reduser";

import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};
let mapDispathcToProps = (dispatch) => {
  return {
    onAddMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

let DialogsContainer = connect(mapStateToProps, mapDispathcToProps)(Dialogs);

export default DialogsContainer;
