import { Component } from '@angular/core';

interface CalcGroup {
  first: number
}

enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/'
}

enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square'
}



@Component({
  selector: 'app-component-learn',
  standalone: false,
  templateUrl: './component-learn.component.html',
  styleUrl: './component-learn.component.scss'
})
export class ComponentLearnComponent {

  public firstname?: string;
  public first: number = 0;
  public second: number = 0;
  public result?: number;
  public operation: string = '+'
  public operations: string[] = ['+','-','*','/']

  // public story: string = 'Пусто';
  // public stories: string[] = [];


  // public pushHistory(first:number, second:number, operation:string, result?:number){
  //   this.stories?.push(first + ' ' + operation + ' ' + second + ' = ' + result)
  // }

  public calculation(){
    
    switch(this.operation) {
      case '+':
        this.result = this.first + this.second
        break;
      case '-':
        this.result = this.first - this.second
        break;
      case '*':
        this.result = this.first * this.second
        break;
      case '/':
        this.result = this.first / this.second
        break;
        
    }
    // this.pushHistory(this.first, this.second, this.operation, this.result)
  }

}
