import React, {Component } from 'react'
import PropTypes from 'prop-types';

import {VenueItem} from './VenueItem';

/*
* import {connect } from 'react-redux'
* import { actions } from '../../actions';
*/


/*
*  This is a wrapper for the list of places.
*
*  This component uses VenueItem to create tile for place.
* */

class Venues extends Component {

    constructor(props) {
        super(props);
    }

    render(){

        const venues = this.props.venues || [];
        return (<div>

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

