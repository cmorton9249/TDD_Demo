export class FizzBuzzEvaluator {
    isFizz(checkValue: number): boolean {
        return checkValue % 3 === 0;
    }

    isBuzz(checkValue: number): boolean {
        return checkValue % 5 === 0;
    }
}