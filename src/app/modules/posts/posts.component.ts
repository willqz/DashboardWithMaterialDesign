import { Component, OnInit } from '@angular/core';
import { BinaryService } from '../../shared/services/Binary.service'
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  result: string;
  form: FormGroup;

  constructor(
    private binaryService: BinaryService,
    fb: FormBuilder
  ) {

    this.form = fb.group({
      num1: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8) ]],
      num2: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8) ]],
      operator:  ['', [Validators.required ]],
    });

  }

  ngOnInit(): void {

  }

  Calcular() {

    if (this.form.valid) {
      const num1 = this.binaryService.convertBinaryToDecimal(this.form.value.num1);
      const num2 = this.binaryService.convertBinaryToDecimal(this.form.value.num2);
      const operator = this.form.value.operator;

      debugger;
      switch(operator)
      {
        case '1':
          this.addition(num1, num2);
          break;
        case '2':
          this.subtraction(num1, num2);
          break;
        case '3':
          this.division(num1, num2);
          break;
        case '4':
          this.multiplication(num1, num2);
          break;
        default:
          break;
      }
    }
  }

  addition(num1: number, num2: number) {
    const result = num1 + num2;
    this.result = this.binaryService.convertDecimalToBinary(result).padStart(8, "0");
  }

  subtraction(num1: number, num2: number) {
    const result = num1 - num2;
    this.result = this.binaryService.convertDecimalToBinary(result).padStart(8, "0");;
  }

  division(num1: number, num2: number) {
    const result =  num1 % num2;
    this.result = this.binaryService.convertDecimalToBinary(result).padStart(8, "0");;
  }

  multiplication(num1: number, num2: number) {
    const result = num1 * num2;
    this.result = this.binaryService.convertDecimalToBinary(result).padStart(8, "0");;
  }

}
