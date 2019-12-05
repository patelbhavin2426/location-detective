import React, {Component } from 'react'
import PropTypes from 'prop-types';
import { fetchPlaces } from '../../services'

import { Venues } from '../Venues'
import './search.css'

/* For Redux
* import { connect } from 'react-redux'
* import { actions } from '../../actions'
*/

/*
*  This component allows users to input their search parameters
*  1st input is for location( city, zipcode)
*  2nd input is for place, the place can contain simple search like food, wine, water etc...
* */
class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            'searchItem' : '',
            'zipCode':'',
            'venues':null,
            'error': null,
            'inputError': false
        };

        this.searchVenues = this.searchVenues.bind(this);
        this.updateSearchItem = this.updateSearchItem.bind(this);
        this.updateZipCode = this.updateZipCode.bind(this);

    }

    searchVenues(event) {

        event.preventDefault();

        if(this.state.zipCode === '' || this.state.searchItem === '' ) {
            this.setState({
                'inputError' : true
            });
            return;
        } else {
            this.setState({
                'inputError' : false
            })
        }

        this.setState( {
            'venues':null,
            'error': null,
            'loading' : true
        });

        return fetchPlaces(this.state.zipCode, this.state.searchItem)
            .then((data) => {

                return this.setState({
                    'venues':data,
                    'error': null,
                    'loading' : false
                });

                // This is for Redux
                // this.props.venuesReceived(data);

            })
            .catch((error) => {

                return this.setState({
                    venues : null,
                    error: 'Sorry! we had some problem with your request.',
                    'loading' : false
                })
            });

    }

    updateZipCode (e) {

        this.setState({
            'zipCode' :e.target.value
        });
    }

    updateSearchItem (e) {

        this.setState({
            'searchItem' :e.target.value
        });
    }

    isLoading() {
        return this.state.error === null && this.state.venues === null;
    }

    render(){

        const {venues, error, inputError} = this.state;

        return (
            <React.Fragment>

                <div className="search space-around">
                     <form className="field" role="search" >
                        <div className="space-wrapper"></div>
                        <input onChange={this.updateZipCode} type="search" className="location-query form-control" name='zipCode' value={this.state.zipCode} placeholder="City" />
                        <input onChange={this.updateSearchItem} type="search" className="search-item form-control" name='searchItem' value={this.state.searchItem} placeholder="Search Place" />
                        <button className="btn searchbox-submitbtn" onClick={this.searchVenues}>Search</button>
                        <div className="space-wrapper"></div>
                    </form>
                    { inputError && <p className='inputError'>We can't search without your input.</p> }
                </div>

                <div className="place-container" >

                    { this.isLoading() && <div className="resultset" >
                        <div className={"loader"}></div>
                    </div> }

                    { error && <p className='inputError'>{error}</p> }

                    { venues && <Venues venues={venues} /> }
                </div>

            </React.Fragment>
        )
    }

}

/* For Redux
const stateToProps = (state) => {

    console.log("received ... ");

    return {
        venues : state.venues
    }
}

const dispatchToProps = (dispatch) => {

    console.log("sending.... ... ");

    return {
        venuesReceived: (venues) => {
            dispatch(actions.venuesReceived(venues));
            console.log("sent.. ... ");
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Nav);

 */


export default Search;
