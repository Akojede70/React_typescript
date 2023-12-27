import React from 'react'
type StatusProps = {
    status: "loading" | "success" | "error" 
}


const status = (props: StatusProps) => {
    let message 
    if (props.status === "loading") {
        message = "loading..."
    } else if (props.status === "success") {
        message = "Data fetched successfully!"
    } else if (props.status === "error") {
        message = "Error fetching data"
    }
  return (
    <div>
     <h2>Status - {message}</h2>
    </div>
  )
}

export default status
