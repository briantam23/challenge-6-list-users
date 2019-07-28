import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import App from '../src/App';


const adapter = new Adapter();
Enzyme.configure({ adapter });


describe('The React Components', () => {

    describe('<App/> component', () => {
        let appWrapper;
    
        before('Create component', () => appWrapper = shallow(<App/>));
    
        it('renders a <div>', () => expect(appWrapper.find('div')).to.have.length(1));
    })
})