import React, {Component } from 'react'
import PropTypes from 'prop-types';
import { fetchPlaces } from '../../services'

import { Venues } from '../Venues'
import './search.css'

/* For Redux
* import { connect } from 'react-redux'
* import { actions } from '../../actions'
*/

class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            'searchItem' : '',
            'zipCode':'',
            'venues':null,
            'error': null
        };

        this.searchVenues = this.searchVenues.bind(this);
        this.updateSearchItem = this.updateSearchItem.bind(this);
        this.updateZipCode = this.updateZipCode.bind(this);
    }

    searchVenues(event) {

        event.preventDefault();

        this.setState( {
            'venues':null,
            'error': null,
            'loading' : true
        });


        fetchPlaces(this.state.zipCode, this.state.searchItem)
            .then((data) => {

                this.setState({
                    'venues':data,
                    'error': null,
                    'loading' : false
                });

                // console.log(data);
                // This is for Redux
                // this.props.venuesReceived(data);

            })
            .catch((error) => {

                console.warn('Error fetching repos: ', error)

                this.setState({
                    venues : null,
                    error: 'There was an error fetching the locations.',
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

        const {venues, error} = this.state;

        return (
            <React.Fragment>

                <div className="search space-around">
                     <form className="field" role="search" >
                        <div className="space-wrapper"></div>
                        <input onChange={this.updateZipCode} type="search" className="zipcode-query form-control" name='zipCode' value={this.state.zipCode} placeholder="City" />
                        <input onChange={this.updateSearchItem} type="search" className="search-item form-control" name='searchItem' value={this.state.searchItem} placeholder="Search Place" />
                        <button className="btn searchbox-submitbtn" onClick={this.searchVenues}>Search</button>
                        <div className="space-wrapper"></div>
                    </form>
                </div>

                <div className="place-container" >

                    { this.isLoading() && <div className="resultset" >
                        <div className={"loader"}></div>
                    </div> }

                    { error && <p>{error}</p> }

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
