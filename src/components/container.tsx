import React from 'react'
type ContainerProps = {
    styles: React.CSSProperties
}

const container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>
      Text content goes here
    </div>
  )
}

export default container
