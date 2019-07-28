import { expect } from 'chai';
import { properCase } from '../src/util';


describe('The Utility Functions', () => {
    
    describe('properCase function', () => {

        it('properCases a first name', () => {
            expect(properCase('brian')).to.equal('Brian');
        });

        it('a proper cased name will remain proper cased', () => {
            expect(properCase('Tam')).to.equal('Tam');
        });
    });
});