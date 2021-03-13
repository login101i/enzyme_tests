import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAtrr } from './../../../Utils'

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component
}



describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp()

    })

    it("musi wyrenderować bez errora", () => {
        const wrapper = findByTestAtrr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })

    it("Musi renderować logo", () => {
        const component = shallow(<Header />)
        const wrapper = findByTestAtrr(component, 'logoIMG')
        expect(wrapper.length).toBe(1)
    })

    
})