import React from 'react'
import Loading from '../99-Loading/Loading'

interface state{
  submitting: boolean, succeeded: boolean
}

function Message({ state }: { state: state }) {
  if (state.submitting) {
    return(<Loading/>)
  }
  if (state.succeeded) {
    return(<span className="response">Feedback, Sent successfully.✅ </span>)
  }
}

export default Message

