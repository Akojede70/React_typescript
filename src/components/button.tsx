import React from 'react'
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>click</button>
  )
}

export default button
