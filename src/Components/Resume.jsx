import React from 'react'

const Resume = ({data}) => {
    console.log(data)
  return (
    <div>
        <h1>Resume</h1>
        <p disabled={!data.formGridName}>{data.formGridName}</p>
        <p disabled={!data.formGridAddress1}>{data.formGridAddress1}</p>
        <p disabled={!data.formGridAddress2}>{data.formGridAddress2}</p>
        <p disabled={!data.formGridCity}>{data.formGridCity}</p>
        <p disabled={!data.formGridState}>{data.formGridState}</p>
        <p disabled={!data.formGridZip}>{data.formGridZip}</p>
        <p disabled={!data.formGridName}>{data.formGridName}</p>
    </div>
    
  )
}

export default Resume