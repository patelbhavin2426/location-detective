import React, {Component} from 'react'
import './venueitem.css'

function VenueItem(props)  {

    const {venue : { name, verified, location }, id } = props.item;
    const verfifiedClassName = verified?"fa fa-thumbs-up" : "fa fa-thumbs-down";

    return (
        <li data-testid={'venue' + id } className="tile bg-light">
            <div className='location-name'><span className="name">{name}</span> <span className={verfifiedClassName}> </span></div>
            <div>{location.address}</div>
        </li>);

}

export default  VenueItem;
