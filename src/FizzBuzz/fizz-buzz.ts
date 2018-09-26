import { FizzBuzzEvaluator } from "./fizz-buzz-evaluator";

export class FizzBuzz {
    constructor(private evaluator: FizzBuzzEvaluator) {

    }

    runFizzbuzz(upperLimit: number): Array<number | string> {
        let result = [];
        for (let index = 1; index < upperLimit + 1; index++) {
            if (this.evaluator.isBuzz(index) && this.evaluator.isFizz(index)) {
                result.push('fizzbuzz')
            } else if (this.evaluator.isBuzz(index)) {
                result.push('buzz');
            } else if (this.evaluator.isFizz(index)) {
                result.push('fizz')
            } else {
                result.push(index)
            }
        }
        return result;
    }
}