import {expect, jest, test} from '@jest/globals';
import * as Calculator from './calculator';

describe('Test of calculator object', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe('When adding function is invoked', () => {
        test('should return 10 when adding 6 to 4, and greater than 5', () => {
            const consoleSpy = jest.spyOn(console,'log');
            const addingResult = Calculator.calculator.add(6,4);
    
            expect(addingResult).toEqual(10);
            expect(consoleSpy).toBeCalled();
            expect(consoleSpy).toBeCalledWith(`Result ${addingResult} is greater than 5`);
            expect(consoleSpy).toBeCalledTimes(1);
        });

        test('should return 2 when adding 1 to 1, and lower than 5', () => {
            const consoleSpy = jest.spyOn(console,'log');
            const addingResult = Calculator.calculator.add(1,1);
    
            expect(addingResult).toEqual(2);
            expect(consoleSpy).toBeCalled();
            expect(consoleSpy).toBeCalledWith(`Result ${addingResult} is lower than 5`);
            expect(consoleSpy).toBeCalledTimes(1);
        });
    })
    

    test('should return 10 when substract 20 to 30', () => {
        const consoleSpy = jest.spyOn(console,'log');
        const addingResult = Calculator.calculator.subs(30,20);

        expect(addingResult).toEqual(10);
        expect(consoleSpy).toBeCalled();
        expect(consoleSpy).toBeCalledWith(`This is the result: ${addingResult}`);
    });

    test('should return 10 when multiplyin 5 and 2', () => {
        const consoleSpy = jest.spyOn(console,'log');
        const addingResult = Calculator.calculator.product(5,2);

        expect(addingResult).toEqual(10);
        expect(consoleSpy).toBeCalled();
        expect(consoleSpy).toBeCalledWith(`This is the result: ${addingResult}`);
    });

    test('should return 10 when divide 100 and 10', () => {
        const consoleSpy = jest.spyOn(console,'log');
        const addingResult = Calculator.calculator.division(100,10);

        expect(addingResult).toEqual(10);
        expect(consoleSpy).toBeCalled();
        expect(consoleSpy).toBeCalledWith(`This is the result: ${addingResult}`);
    });
});