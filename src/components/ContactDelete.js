import React from 'react'
import {Link} from "react-router-dom"


const ContactDelete = (props) => {
    const raja = props.match.params.id;


    return (
        <div style={{marginTop:"50px"}}>
            <h1>Are you want to delete the contact</h1>
            <Link to="/">
            <button className="ui button red" onClick={() => props.removeContact(raja)} >Yes</button>
            </Link>
            <Link to="/">
            <button className="ui button blue" >No</button>
            </Link>
        </div>
    )
}


export default ContactDelete