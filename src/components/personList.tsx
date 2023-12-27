import React from 'react'
import {Name} from "./person.types"


type PersonsListProps = {
  names: Name[]
  // remove the Name import and use the comment below
  //  names: {
  //   first: string
  //   last: string
  // }[]
}
const personList = (props: PersonsListProps ) => {
  return (
    <div>
     {props.names.map(name => {
      return (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      )
     })}
    </div>
  )
}

export default personList
