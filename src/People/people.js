import React from 'react'

const People = (props) => <div className="people">
    <div> {props.name} </div>
    <div> {props.gender} </div>
    <div> {props.birth_year} </div>
</div>

export default People