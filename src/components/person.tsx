import React from 'react'
import { PersonProps } from './person.types'

// remove the PersonProps import and use the comment below
// type PersonProps = {
//   name: {
//       first: string
//       last: string
//   }
// }

const person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}

export default person
