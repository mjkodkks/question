import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionone',
  templateUrl: './questionone.component.html',
  styleUrls: ['./questionone.component.scss']
})
export class QuestiononeComponent implements OnInit {

  constructor() { }


  inputText: string = ''
  options: Array<string> = ["isPrime","isFibonacci"]
  selectedOption: string = "isPrime"
  result: boolean


  ngOnInit(): void {
  }

  textChange(input : string): void {
    console.log('new value :', input)

    if (input.search(/-1/g) >= 0) {
      // check -1
      this.inputText = input.replace(/-1/g, "0");
    } else if (!Number(input)) {
      // check is not number'
      const replateInput = input.replace(/[^\d]/g, "");
      this.inputText = replateInput;
    } else {
      this.inputText = input;
    }

    if (Number(this.inputText)) {
        this.selectCalFunction(this.selectedOption, this.inputText)
    } else {
      this.result = null
    }

  }

  dropDownChange(): void {
      this.selectCalFunction(this.selectedOption, this.inputText)
  }

  selectCalFunction(mode: string, inputText: string) {
    const numb = +inputText;
    this.result = mode === "isPrime" ? this.isPrime(numb) : this.isFibonacci(numb);
  }

  isPrime(inputText: number): boolean {
    for (var i = 2; i < inputText; i++) {
      if(inputText % i === 0) return false; 
    }
    return inputText > 1; 
  }

  isFibonacci(inputText: number): boolean {
    const isSquare = (n)=> {
      return n > 0 && Math.sqrt(n) % 1 === 0;
  };
    return isSquare(5 * inputText * inputText - 4) || isSquare(5 * inputText * inputText + 4);
  }

}
