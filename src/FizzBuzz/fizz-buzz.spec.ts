import { FizzBuzz } from './fizz-buzz'
import { FizzBuzzEvaluator } from './fizz-buzz-evaluator';

describe('Fizz Buzz Tests', () => {
    it('can accept a user defined array boundary', () => {
        let mockEvaluator = {
            isFizz: jest.fn(),
            isBuzz: jest.fn()
        } as FizzBuzzEvaluator;
        let fizzbuzz = new FizzBuzz(mockEvaluator);

        let results = fizzbuzz.runFizzbuzz(100);

        expect(results.length).toBe(100)
    });

    it('can put numbers in the array', () => {
        let mockEvaluator = {
            isFizz: jest.fn(),
            isBuzz: jest.fn()
        } as FizzBuzzEvaluator;
        let fizzbuzz = new FizzBuzz(mockEvaluator);

        let results = fizzbuzz.runFizzbuzz(1);

        expect(results[0]).toBe(1);
    });

    it('will replace the number with fizz if divisible by 3', () => {
        let mockEvaluator = {
            isFizz: jest.fn(check => check === 3),
            isBuzz: check => false
        } as FizzBuzzEvaluator;
        let fizzbuzz = new FizzBuzz(mockEvaluator);

        let results = fizzbuzz.runFizzbuzz(3);

        expect(results[2]).toBe('fizz');
    });

    it('will replace the number with buzz if divisible by 5', () => {
        let mockEvaluator = {
            isFizz: check => false,
            isBuzz: jest.fn(check => check === 5)
        } as FizzBuzzEvaluator;
        let fizzbuzz = new FizzBuzz(mockEvaluator);

        let results = fizzbuzz.runFizzbuzz(5);

        expect(results[4]).toBe('buzz');
    });

    it('will replace the number with fizzbuzz if divisible by both', () => {
        let mockEvaluator = {
            isFizz: jest.fn(check => check === 15),
            isBuzz: jest.fn(check => check === 15)
        } as FizzBuzzEvaluator;
        let fizzbuzz = new FizzBuzz(mockEvaluator);

        let results = fizzbuzz.runFizzbuzz(15);

        expect(results[14]).toBe('fizzbuzz');
    })

    it('prints results', () => {
        let fizzbuzzer = new FizzBuzz(new FizzBuzzEvaluator());
        let result = fizzbuzzer.runFizzbuzz(100);
        console.log(result.reduce((x, y) => x.toString() + ' ' + y.toString()));
    })
})