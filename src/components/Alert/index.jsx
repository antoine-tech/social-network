import React from "react"
import { connect } from "react-redux"
import * as actionDispatch from "../../store/actions"


// RETRIEVING STATE
const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        removeAlert: () => dispatch(actionDispatch.setAlertMessage(
            {
                type: "",
                messages: [
                ]
            }
        ))
    }
}


const Alert = ({ messages, removeAlert }) => {



    return (


        messages.messages.length > 0 ? (


            <div className={`alert alert-${messages.type} alert-dismissible fade show my-4`} role="alert">
                {
                    messages.messages.map((e) => <p className="text-center">{e.message}</p>)
                }
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => removeAlert()}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

        ) : null

    )
}


export default connect(mapStateToProps, mapDispatchProps)(Alert);