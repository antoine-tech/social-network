import React from "react"
import { connect } from "react-redux";
import * as actionDispatch from "../../store/actions";


const mapDispatchToProps = (dispatch) => {
    return {
        setAlertMessages: (messages) => dispatch(actionDispatch.setAlertMessage(messages))
    }
}

const Alert = ({ type, messages, setAlertMessages }) => {


    return (
        <div className={`alert alert-${type} alert-dismissible fade show my-4`} role="alert">
            {
                messages.map((e) => <p className="text-center">{e.message}</p>)
            }
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={(event) => setAlertMessages([])}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}


export default connect(null, mapDispatchToProps)(Alert);