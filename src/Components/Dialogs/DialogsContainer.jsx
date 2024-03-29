import {sendMessageActionCreator} from '../../REDUX/dialogsReducer.ts'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessageActionCreator(newMessage))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
