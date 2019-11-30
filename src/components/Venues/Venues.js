import React, {Component } from 'react'
import PropTypes from 'prop-types';

import {VenueItem} from './VenueItem';

/*
* import {connect } from 'react-redux'
* import { actions } from '../../actions';
*/

class Venues extends Component {

    constructor(props) {
        super(props);
    }

    render(){

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

/*
const stateToProps = (state) => {

    return {
        venues: state.venues.venues
    }
}


export default connect(stateToProps)(Venues);
*/

Venues.propTypes = {
    venues: PropTypes.array
};

export default Venues;

