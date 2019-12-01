import React from 'react';
import renderer from 'react-test-renderer';

import { shallow, mount } from "enzyme";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// For Redux
// import { Provider } from "react-redux";
// import configureMockStore from "redux-mock-store";


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


    it("should render search inputs UI", () => {

        // Act
        let component = renderer.create(
            <Search />
        ).toJSON();
        // snapshot
        expect(component).toMatchSnapshot();


        // Act
        component = mount(
            <Search />
        );
        expect((component).prop('state')).not.toEqual(null);

        // class check
        expect(component.find('.zipcode-query').text()).toEqual('');
        expect(component.find('.search-item').text()).toEqual('');
        expect(component.find('.searchbox-submitbtn').text()).toEqual('Search');


    });


    it("should change state with value change in input fields", () => {

        // Act
        let component = mount(
            <Search />
        );
        expect((component).prop('state')).not.toEqual(null);

        // basic check
        expect(component.find('.zipcode-query').text()).toEqual('');
        expect(component.find('.search-item').text()).toEqual('');
        expect(component.find('.searchbox-submitbtn').text()).toEqual('Search');

        // type in the text
        component.find('.zipcode-query').simulate('change', {target: {name: 'zipCode', value: 'Fremont'}});
        expect(component.state('zipCode')).toEqual('Fremont');

        component.find('.search-item').simulate('change', {target: {name: 'searchItem', value: 'food'}});
        expect(component.state('searchItem')).toEqual('food');

    });


    it("let's click on search button", () => {

        // Act
        let component = mount(
            <Search />
        );
        expect((component).prop('state')).not.toEqual(null);

        // basic check
        expect(component.find('.zipcode-query').text()).toEqual('');
        expect(component.find('.search-item').text()).toEqual('');
        expect(component.find('.searchbox-submitbtn').text()).toEqual('Search');

        // type in the text
        component.find('.zipcode-query').simulate('change', {target: {name: 'zipCode', value: 'Fremont'}});
        component.find('.search-item').simulate('change', {target: {name: 'searchItem', value: 'food'}});
        component.find('button').simulate('click');

        expect(component.state('loading')).toBe(true);

    });



});

