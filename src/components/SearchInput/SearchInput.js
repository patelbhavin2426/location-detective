import React, {Component} from 'react'
import {VenueItem} from "../Venues/VenueItem";


class SearchInput extends Component {

    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.props.onChange(e);
    }

    render() {

        const venues = this.props.venues || [];
        return (<div>

            {!venues && <div>Search places ..</div> }

            <ul className="grid space-around">
                {venues.map( ( item,index) => {

                    const {venue: {name, verified, location}, id} = item;
                    item.index = index;

                    return (
                        <VenueItem key={index} item={item}/>
                    )
                })
                }
            </ul>
        </div> )

    }

}

export default  SearchInput;
