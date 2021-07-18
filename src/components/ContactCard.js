import React from 'react'
import {Link} from 'react-router-dom'
import user from '../images/user.png'
// import ContactDelete from './component/ContactDelete'


const ContactCard = (props) => {
    const {id, name, email} = props.contact
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                    <Link to={{pathname:`/contact/${id}`, state: {contact: props.contact}}}>
                    <div className="header">{name}</div>
                    <div>{email}</div> </Link>
                    <Link to={{pathname:`/edit`, state:{contact: props.contact}}}>
                    <i className="edit alternate outline icon right" style={{color:"blue", marginTop:"7px"}} />
                    </Link>
                    <Link to={{pathname:`/delete/${id}`}}>
                    <i className="trash alternate outline icon right" style={{color:"red", marginTop:"7px"}} />
                    </Link>
                     
                </div>
 
            </div>
    )
}


export default ContactCard