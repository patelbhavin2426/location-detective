import React from 'react';
import renderer from 'react-test-renderer';
import VenueItem from './venueitem';
import { mount } from "enzyme";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Venue Item :: ", () => {

    it("should render without throwing an error" , () => {

        let venueList = [
            { venue: { name : 'item one', verified: true, location: {address : 'address one'}} ,  id :'1' },
        ];

        let component = renderer.create(
            <VenueItem item={venueList[0]} />
        );

        // snapshot
        expect(component).toMatchSnapshot();
        expect(component).not.toBe(null);
    });

    it("should render one item", () => {

        let venueList = [
            { venue: { name : 'item two', verified: true, location: {address : 'El Paso venue2'}} , id :'22' }
        ];

        // Act
        let component = mount(
            <VenueItem item={venueList[0]} />
        );
        expect((component).prop('venues')).not.toEqual(null);

        // class check
        expect(component.find('li').first().text()).toEqual('item two  El Paso venue2');

    });

});
