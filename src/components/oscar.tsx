import React from 'react'

type OscarProps = {
    children: React.ReactNode 
}

const oscar = (props: OscarProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default oscar
