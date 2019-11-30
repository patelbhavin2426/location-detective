import React from 'react';
import renderer from 'react-test-renderer';

import { shallow, mount } from "enzyme";
// import { Provider } from "react-redux";
// import configureMockStore from "redux-mock-store";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// For Redux
Enzyme.configure({ adapter: new Adapter() });
// const mockStore = configureMockStore();
// const store = mockStore({
//     venues : venues
// });

import Search from './Search'

describe("Search Component :: ", () => {

    it("should render without throwing an error", () => {
        expect(
            renderer.create(
                <Search/>
            )
        ).not.toBe(null);
    });


    it("should render two items", () => {

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
        expect((component).prop('venues')).not.toEqual(null);

        // class check
        expect(component.find('li').first().text()).toEqual('taco bell -- TRUE El Paso venue');
        expect(component.find('li').last().text()).toEqual('taco bell-2 -- TRUE El Paso venue2');


    });

});

