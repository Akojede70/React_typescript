import React from 'react'

type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

function greet(props: GreetProps) {
  return (
    <div>
      <h2>
        {props.isLoggedIn ?
        `Welcome ${props.name} you have ${props.messageCount} unread messages`
        : `welcome Guset`}
        </h2>
    </div>
  )
}

export default greet
