
export class BinarioConvertService {

  constructor() { }

  convertBinaryToDecimal(numberBinary: string) {
    const numbers = numberBinary.split('');

    const result =  this.BinSeven(parseInt(numbers[0])) +
                    this.BinSix(parseInt(numbers[1])) +
                    this.BinFive(parseInt(numbers[2])) +
                    this.BinFour(parseInt(numbers[3])) +
                    this.BinThree(parseInt(numbers[4])) +
                    this.BinTwo(parseInt(numbers[5])) +
                    this.BinOne(parseInt(numbers[6])) +
                    this.BinZero(parseInt(numbers[7]));

    return result;
  }

  convertDecimalToBinary(value: number) {
    return parseInt(value.toString(2));
  }

  BinSeven(value: number) {
    return value * Math.pow(2, 7);
  }

  BinSix(value: number) {
    return value * Math.pow(2, 6);
  }

  BinFive(value: number) {
    return value * Math.pow(2, 5);
  }

  BinFour(value: number) {
    return value * Math.pow(2, 4);
  }

  BinThree(value: number) {
    return value * Math.pow(2, 3);
  }

  BinTwo(value: number) {
    return value * Math.pow(2, 2);
  }

  BinOne(value: number) {
    return value * Math.pow(2, 1);
  }

  BinZero(value: number) {
    return value * Math.pow(2, 0);
  }

  //(00000101)₂ = (0 × 2⁷) + (0 × 2⁶) + (0 × 2⁵) + (0 × 2⁴) + (0 × 2³) + (1 × 2²) + (0 × 2¹) + (1 × 2⁰) = (5)₁₀

}
