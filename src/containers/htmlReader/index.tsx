import {
  handleFetchNotes,
  handleFetchBookmarks,
  handleFetchChapters,
} from "../../store/actions/reader";

import {
  handleMessageBox,
  handleFetchBooks,
} from "../../store/actions/manager";
import { connect } from "react-redux";
import { stateType } from "../../store";
import Reader from "./component";

const mapStateToProps = (state: stateType) => {
  return {
    currentEpub: state.book.currentEpub,
    currentBook: state.book.currentBook,
    isMessage: state.manager.isMessage,
    percentage: state.progressPanel.percentage,
  };
};
const actionCreator = {
  handleFetchNotes,
  handleFetchBookmarks,
  handleFetchChapters,
  handleMessageBox,
  handleFetchBooks,
};
export default connect(mapStateToProps, actionCreator)(Reader);
