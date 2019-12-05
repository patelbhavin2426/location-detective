import React from 'react';
import renderer from 'react-test-renderer';

import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Venues } from '../Venues'

let venues = [
    { venue: { name : 'taco bell', verified: true, location: {address : 'El Paso'}} ,  id :'1' },
    { venue: { name : 'taco bell-2', verified: true, location: {address : 'El Paso2'}} , id :'2' }
];

// For Redux
Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({
    venues : venues
});


describe("Venue Component :: ", () => {

    it("should render without throwing an error", () => {
        expect(
            renderer.create(
                <Venues venues={venues}/>
            )
        ).not.toBe(null);
    });

    it("should render with Sorry message", () => {

        // Act
        const component = mount(
            <Venues venues={undefined} />
        );

        // Assert
        expect(component).toMatchSnapshot();
    });

    it("should render two items", () => {

        let venues = [
            { venue: { name : 'taco bell', verified: true, location: {address : 'El Paso venue'}} ,  id :'11' },
            { venue: { name : 'taco bell-2', verified: true, location: {address : 'El Paso venue2'}} , id :'22' }
        ];

        // Act
        let component = renderer.create(
            <Venues venues={venues} />
        ).toJSON();
        // snapshot
        expect(component).toMatchSnapshot();

        // Act
        component = mount(
            <Venues venues={venues} />
        );

        // Assert
        expect((component).prop('venues')).not.toEqual(null);
        expect(component.find('li').first().text()).toEqual('taco bell  El Paso venue');
        expect(component.find('li').last().text()).toEqual('taco bell-2  El Paso venue2');
    });

});

