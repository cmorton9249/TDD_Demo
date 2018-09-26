import { FizzBuzzEvaluator } from "./fizz-buzz-evaluator";

describe('fizzbuzz evaluator', () => {
    it('Can tell if something is evenly divisible by 3', () => {
        let sut = new FizzBuzzEvaluator();
        let result = sut.isFizz(3)
        expect(result).toBe(true);
    })

    it('Can tell if something is not evenly divisible by 3', () => {
        let sut = new FizzBuzzEvaluator();
        let result = sut.isFizz(7)
        expect(result).toBe(false);
    })

    it('Can tell if something is evenly divisible by 5', () => {
        let sut = new FizzBuzzEvaluator();
        let result = sut.isBuzz(5)
        expect(result).toBe(true);
    })

    it('Can tell if something is not evenly divisible by 5', () => {
        let sut = new FizzBuzzEvaluator();
        let result = sut.isBuzz(7)
        expect(result).toBe(false);
    })

    it('Can tell if something is evenly divisable by both', () => {
        let sut = new FizzBuzzEvaluator();
        let result = sut.isFizz(15) && sut.isBuzz(15);
        expect(result).toBe(true);
    })

    it('Can tell if something is not evenly divisable by both', () => {
        let sut = new FizzBuzzEvaluator();
        let result = sut.isFizz(17) && sut.isBuzz(17);
        expect(result).toBe(false);
    })
})